import React, { Component } from 'react'
import { PrefixDataTable as DataTable } from './../resuables/datatable/datatable';

import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';

import './users.css';


export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isExport: false,
            isGlobalSearch: false,
            isSorting: false,
            isColumnFilter: false,
            isSelection: false,
            isExpand: false,
            isPagination: false,
            isColumnReorder: false,
            visibleBottom: false,
            selectedFeatures: [],
        };
        this.features = ["isExport", "isGlobalSearch", "isSorting", "isColumnFilter", "isSelection", "isExpand", "isPagination", "isColumnReorder"];
    }

    onFeatureChange = (e) => {
        this.setState({ [e.value]: !this.state[e.value] });
    }


    render() {
        const columns = [
            {
                field: 'name',
                header: 'Name',
                type: 'input'
            },
            {
                field: 'country',
                header: 'Country',
                type: 'input'
            },
            {
                field: 'company',
                header: 'Company',
                type: 'input'
            },
            {
                field: 'representative',
                header: 'Representative',
                type: 'input'
            },
            {
                field: 'date',
                header: 'Date of Joining',
                type: 'date'
            },
            {
                field: 'status',
                header: 'Status',
                type: 'status'
            },
            {
                field: 'activity',
                header: 'activity',
                type: 'progressbar'
            }
        ]
        const data = [
            {
                "id": 1000,
                "name": "James Butt",
                "country": "Algeria",
                "company": "Benton, John B Jr",
                "date": "2015-09-13",
                "status": "unqualified",
                "activity": 17,
                "representative": "Ioni Bowcher",
                "orders": [
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "2",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    }
                ]
            },
            {
                "id": 1001,
                "name": "Josephine Darakjy",
                "country": "Egypt",
                "company": "Chanay, Jeffrey A Esq",
                "date": "2019-02-09",
                "status": "proposal",
                "activity": 0,
                "representative": "Amy Elsner",
                "orders": [
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    }
                ]
            },
            {
                "id": 1002,
                "name": "Art Venere",
                "country": "Panama",
                "company": "Chemel, James L Cpa",
                "date": "2017-05-13",
                "status": "qualified",
                "activity": 63,
                "representative": "Asiya Javayant",
                "orders": [
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                ]
            },
            {
                "id": 1003,
                "name": "Lenna Paprocki",
                "country": "Slovenia",
                "company": "Feltz Printing Service",
                "date": "2020-09-15",
                "status": "new",
                "activity": 37,
                "representative": "Xuxue Feng",
                "orders": [
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                ]
            },
            {
                "id": 1004,
                "name": "Donette Foller",
                "country": "South Africa",
                "company": "Printing Dimensions",
                "date": "2016-05-20",
                "status": "proposal",
                "activity": 33,
                "representative": "Asiya Javayant",
                "orders": [
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                ]
            },
            {
                "id": 1005,
                "name": "Simona Morasca",
                "country": "Egypt",
                "company": "Chapman, Ross E Esq",
                "date": "2018-02-16",
                "status": "qualified",
                "activity": 68,
                "representative": "Ivan Magalhaes",
                "orders": [
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                ]
            },
            {
                "id": 1006,
                "name": "Mitsue Tollner",
                "country": "Paraguay",
                "company": "Morlong Associates",
                "date": "2018-02-19",
                "status": "renewal",
                "activity": 54,
                "representative": "Ivan Magalhaes",
                "orders": [
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                ]
            },
            {
                "id": 1007,
                "name": "Leota Dilliard",
                "country": "Serbia",
                "company": "Commercial Press",
                "date": "2019-08-13",
                "status": "renewal",
                "activity": 69,
                "representative": "Onyama Limba",
                "orders": [
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                ]
            },
            {
                "id": 1008,
                "name": "Sage Wieser",
                "country": "Egypt",
                "company": "Truhlar And Truhlar Attys",
                "date": "2018-11-21",
                "status": "unqualified",
                "activity": 76,
                "representative": "Ivan Magalhaes",
                "orders": [
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                ]
            },
            {
                "id": 1009,
                "name": "Kris Marrier",
                "country": "Mexico",
                "company": "King, Christopher A Esq",
                "date": "2015-07-07",
                "status": "proposal",
                "activity": 3,
                "representative": "Onyama Limba",
                "orders": [
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                ]
            },
            {
                "id": 1010,
                "name": "Minna Amigon",
                "country": "Romania",
                "company": "Dorl, James J Esq",
                "date": "2018-11-07",
                "status": "qualified",
                "activity": 38,
                "representative": "Anna Fali",
                "orders": [
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                    {
                        "amount": 65,
                        "customer": "David James",
                        "date": "2020-09-13",
                        "id": "1000",
                        "productCode": "f230fh0g3",
                        "quantity": 1,
                        "status": "PENDING",
                    },
                ]
            }
        ];

        const { isExport, isGlobalSearch, isSorting, isColumnFilter, isSelection, isExpand, isPagination, isColumnReorder } = this.state;

        return (
            <div>

                <DataTable heading="Users" data={data} columns={columns} isExport={isExport} isGlobalSearch={isGlobalSearch} isSorting={isSorting} isColumnFilter={isColumnFilter} isSelection={isSelection} isExpand={isExpand} isPagination={isPagination} isColumnReorder={isColumnReorder} />

                <Sidebar visible={this.state.visibleBottom} position="bottom" baseZIndex={1000000} onHide={() => this.setState({ visibleBottom: false })}>
                    <h1 style={{ fontWeight: 'normal' }}>Select Features</h1>

                    <div className="flex child-p-r-30">
                        <div className="p-field-checkbox">
                            <Checkbox inputId="isExport" name="isExport" value="isExport" onChange={this.onFeatureChange} checked={isExport} />
                            <label htmlFor="isExport">Export as</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="isGlobalSearch" name="isGlobalSearch" value="isGlobalSearch" onChange={this.onFeatureChange} checked={isGlobalSearch} />
                            <label htmlFor="isGlobalSearch">Global Search</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="isSorting" name="isSorting" value="isSorting" onChange={this.onFeatureChange} checked={isSorting} />
                            <label htmlFor="isSorting">Column Sorting</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="isColumnFilter" name="isColumnFilter" value="isColumnFilter" onChange={this.onFeatureChange} checked={isColumnFilter} />
                            <label htmlFor="isColumnFilter">Column Filter</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="isSelection" name="isSelection" value="isSelection" onChange={this.onFeatureChange} checked={isSelection} />
                            <label htmlFor="isSelection">Row Selection</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="isExpand" name="isExpand" value="isExpand" onChange={this.onFeatureChange} checked={isExpand} />
                            <label htmlFor="isExpand">Row Expand</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="isPagination" name="isPagination" value="isPagination" onChange={this.onFeatureChange} checked={isPagination} />
                            <label htmlFor="isPagination">Pagination</label>
                        </div>
                        <div className="p-field-checkbox">
                            <Checkbox inputId="isColumnReorder" name="isColumnReorder" value="isColumnReorder" onChange={this.onFeatureChange} checked={isColumnReorder} />
                            <label htmlFor="isColumnReorder">Column Reorder</label>
                        </div>
                    </div>

                </Sidebar>

                <Button icon="pi pi-cog" onClick={() => this.setState({ visibleBottom: true })} className="p-button-rounded p-button-danger customize-icon"  />
            </div>
        )
    }
}
