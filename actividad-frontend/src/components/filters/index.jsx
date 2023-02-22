import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import React from 'react';


export const Filters = () => {
    const [categories, setCategories] = React.useState([]);

    const filterOptions = createFilterOptions({
        matchFrom: 'start',
        stringify: (option) => option.title,
      });

    //   const options = [
    //     { label: 'The Godfather', id: 1 },
    //     { label: 'Pulp Fiction', id: 2 },
    //   ];

      React.useEffect(() => {
        fetch('/products/categories')
        .then(response => response.json())
        .then( data => {
            setCategories(data.map( (item, index) => ({ label:item , id:index})));
        });
      }, [])

    return (
        <div className="filter">
            <div className="filter_box">
            <Autocomplete
                options={categories}
                getOptionLabel={(option) => option.label}
                filterOptions={filterOptions}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Custom filter" />}
            />
            </div>
        </div>
    )
}