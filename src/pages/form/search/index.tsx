import * as React from 'react'
import FormGroup from './SearchGroup'
import FormCollapse from './SearchCollapse'
import './index.less'
class SearchFormPage extends React.Component{
    public render () {
        return (
            <div className="search-form-wrap">
                <FormGroup />
                <FormCollapse />
            </div>
        )
    }
}

export default SearchFormPage