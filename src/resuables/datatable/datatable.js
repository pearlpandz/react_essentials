import React, { Component } from 'react';
import classNames from 'classnames';

import { jsPDF } from "jspdf";
import 'jspdf-autotable'

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { ProgressBar } from 'primereact/progressbar';
import { Tooltip } from 'primereact/tooltip';

import './datatable.css';


export class PrefixDataTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            columns: null,
            selectedCustomers: null,
            globalFilter: null,
            selectedRepresentatives: null,
            dateFilter: null,
            selectedStatus: null
        };

        this.representatives = [
            { name: "Amy Elsner" },
            { name: "Anna Fali" },
            { name: "Asiya Javayant" },
            { name: "Bernardo Dominic" },
            { name: "Elwin Sharvill" },
            { name: "Ioni Bowcher" },
            { name: "Ivan Magalhaes" },
            { name: "Onyama Limba" },
            { name: "Stephen Shaw" },
            { name: "XuXue Feng" }
        ];

        this.statuses = [
            'unqualified', 'qualified', 'new', 'negotiation', 'renewal', 'proposal'
        ];

        //body cells
        this.nameBodyTemplate = this.nameBodyTemplate.bind(this);
        this.countryBodyTemplate = this.countryBodyTemplate.bind(this);
        this.representativeBodyTemplate = this.representativeBodyTemplate.bind(this);
        this.dateBodyTemplate = this.dateBodyTemplate.bind(this);
        this.statusBodyTemplate = this.statusBodyTemplate.bind(this);
        this.activityBodyTemplate = this.activityBodyTemplate.bind(this);
        this.actionBodyTemplate = this.actionBodyTemplate.bind(this);

        //filters
        this.representativeItemTemplate = this.representativeItemTemplate.bind(this);
        this.onRepresentativeFilterChange = this.onRepresentativeFilterChange.bind(this);
        this.onDateFilterChange = this.onDateFilterChange.bind(this);
        this.filterDate = this.filterDate.bind(this);       //custom filter function
        this.statusItemTemplate = this.statusItemTemplate.bind(this);
        this.onStatusFilterChange = this.onStatusFilterChange.bind(this);

        // export
        this.exportCSV = this.exportCSV.bind(this);
    }

    componentDidMount() {
        const { data, columns } = this.props;
        this.setState({
            data, columns
        })
    }

    renderHeader() {
        return (
            <div className="table-header">
                <h4 className="p-mr-2 margin-zero">List of Customers</h4>
                <div className="flex">
                    <div className="flex m-r-5">
                        <Button type="Button" icon="pi pi-file-excel" className="m-r-5" onClick={this.exportCSV} tooltip="Export as CSV" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />
                        <Button type="Button" icon="pi pi-file-pdf" className="m-r-5 p-button-danger" onClick={this.exportPdf} tooltip="Export as PDF" tooltipOptions={{ position: 'bottom', mouseTrack: true, mouseTrackTop: 15 }} />
                        <Tooltip target=".logo" mouseTrack mouseTrackLeft={10}/>
                    </div>

                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText type="search" onInput={(e) => this.setState({ globalFilter: e.target.value })} placeholder="Global Search" />
                    </span>
                </div>
            </div>
        );
    }

    exportCSV() {
        this.dt.exportCSV();
    }

    exportPdf = () => {
        const { data, columns } = this.props;

        const doc = new jsPDF();
        doc.autoTable({
            head: [columns.map(a => a.field)],
            body: data.map(a => Object.values(a)),
        })

        doc.save('users.pdf')
    }

    activityBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Activity</span>
                <ProgressBar value={rowData.activity} showValue={false} />
            </React.Fragment>
        );
    }

    actionBodyTemplate() {
        return (
            <Button type="button" icon="pi pi-cog" className="p-button-secondary"></Button>
        );
    }

    statusBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Status</span>
                <span className={classNames('customer-badge', 'status-' + rowData.status)}>{rowData.status}</span>
            </React.Fragment>
        );
    }

    nameBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Name</span>
                {rowData.name}
            </React.Fragment>
        );
    }

    countryBodyTemplate(rowData) {
        let name = rowData.country;

        return (
            <React.Fragment>
                <span className="p-column-title">Country</span>
                <span style={{ verticalAlign: 'middle', marginLeft: '.5em' }}>{name}</span>
            </React.Fragment>
        );
    }

    representativeBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Representative</span>
                <span style={{ verticalAlign: 'middle', marginLeft: '.5em' }}>{rowData.representative}</span>
            </React.Fragment>
        );
    }

    dateBodyTemplate(rowData) {
        return (
            <React.Fragment>
                <span className="p-column-title">Date</span>
                <span>{rowData.date}</span>
            </React.Fragment>
        );
    }

    renderRepresentativeFilter() {
        return (
            <MultiSelect className="p-column-filter" value={this.state.selectedRepresentatives} options={this.representatives}
                onChange={this.onRepresentativeFilterChange} itemTemplate={this.representativeItemTemplate} placeholder="All" optionLabel="name" optionValue="name" />
        );
    }

    representativeItemTemplate(option) {
        return (
            <div className="p-multiselect-representative-option">
                <span style={{ verticalAlign: 'middle', marginLeft: '.5em' }}>{option.name}</span>
            </div>
        );
    }

    onRepresentativeFilterChange(event) {
        this.dt.filter(event.value, 'representative', 'in');
        this.setState({ selectedRepresentatives: event.value });
    }

    renderDateFilter() {
        return (
            <Calendar value={this.state.dateFilter} onChange={this.onDateFilterChange} placeholder="Registration Date" dateFormat="yy-mm-dd" className="p-column-filter" />
        );
    }

    onDateFilterChange(event) {
        if (event.value !== null)
            this.dt.filter(this.formatDate(event.value), 'date', 'equals');
        else
            this.dt.filter(null, 'date', 'equals');

        this.setState({ dateFilter: event.value });
    }

    filterDate(value, filter) {
        if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
            return true;
        }

        if (value === undefined || value === null) {
            return false;
        }

        return value === this.formatDate(filter);
    }

    formatDate(date) {
        let month = date.getMonth() + 1;
        let day = date.getDate();

        if (month < 10) {
            month = '0' + month;
        }

        if (day < 10) {
            day = '0' + day;
        }

        return date.getFullYear() + '-' + month + '-' + day;
    }

    renderStatusFilter() {
        return (
            <Dropdown value={this.state.selectedStatus} options={this.statuses} onChange={this.onStatusFilterChange}
                itemTemplate={this.statusItemTemplate} showClear placeholder="Select a Status" className="p-column-filter" />
        );
    }

    statusItemTemplate(option) {
        return (
            <span className={classNames('customer-badge', 'status-' + option)}>{option}</span>
        );
    }

    onStatusFilterChange(event) {
        this.dt.filter(event.value, 'status', 'equals');
        this.setState({ selectedStatus: event.value });
    }

    render() {
        const header = this.renderHeader();
        const dateFilter = this.renderDateFilter();
        const statusFilter = this.renderStatusFilter();

        const { data, columns } = this.props;

        const dynamicColumns = columns.map((col, i) => {
            if (col.type === 'date') {
                return <Column key={col.field} field={col.field} header={col.header} body={this.dateBodyTemplate} sortable filter filterMatchMode="custom" filterFunction={this.filterDate} filterElement={dateFilter} />
            } else if (col.type === 'status') {
                return <Column key={col.field} field={col.field} header={col.header} body={this.statusBodyTemplate} sortable filter filterElement={statusFilter} />
            } else if (col.type === 'progressbar') {
                return <Column key={col.field} field={col.field} header={col.header} body={this.activityBodyTemplate} sortable filter filterMatchMode="gte" filterPlaceholder="Minimum" />
            } else {
                return <Column key={col.field} field={col.field} header={col.header} sortable filter filterMatchMode="contains" />
            }
        });


        return (
            <div className="datatable-doc-demo" >
                <div className="card">
                    <DataTable ref={(el) => this.dt = el} value={data}
                        header={header} className="p-datatable-customers" dataKey="id" rowHover globalFilter={this.state.globalFilter}
                        selection={this.state.selectedCustomers} onSelectionChange={e => this.setState({ selectedCustomers: e.value })}
                        paginator rows={10} emptyMessage="No data found" currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
                        paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown" rowsPerPageOptions={[10, 25, 50]}>
                        <Column selectionMode="multiple" style={{ width: '3em' }} />
                        {dynamicColumns}
                    </DataTable>
                </div>
            </div>
        );
    }
}