import React, { useEffect, useRef, useState } from 'react';
import { getList, setItem, updateItem, deleteItem } from '../services/list';
import FilterData from '../components/Groceries/FilterData';
import Groceries from '../components/Groceries/Groceries';
import AddData from '../components/Groceries/AddData';

import logo from './../media/img/logo.svg';

const Grocery = () => {
  const [alert, setAlert] = useState(false);
  const [itemInput, setItemInput] = useState('');
  const [itemUpdate, setItemUpdate] = useState('');
  const [itemFilter, setItemFilter] = useState('');
  const [startUdate, setStartUdate] = useState(0);
  const [list, setList] = useState([]);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    if(list.length && !alert) {
      return;
    }
    getList()
      .then(items => {
        if(mounted.current) {
          setList(items)
        }
      })
    return () => mounted.current = false;
  }, [alert, list])

  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        if(mounted.current) {
          setAlert(false);
        }
      }, 1000)
    }
  }, [alert])

  const submitData = (e) => {
    e.preventDefault();
    setItem(itemInput)
      .then(() => {
        if(mounted.current) {
          setAlert(true);
        }
      })
  };
  
  const handleUpdateItem = (e) => {
    e.preventDefault();
    updateItem(e.target.getAttribute('alt'), itemUpdate)
      .then(() => {
        if(mounted.current) {
          setItemInput('');
          setAlert(true);
        }
      })
  };
  
  const handleChangeItem = (e) => {
    e.preventDefault();
  	setItemUpdate(e.target.value);
  	let newList = [...list];
  	newList.some(it => {
  		if(it.id==e.target.alt) {
  		 	it.item = e.target.value;
  			return true;
  		}
  	});
  	setList(newList);
  }
  
  const handleDelItem = (idInput) => {
    deleteItem(idInput)
      .then(() => {
        if(mounted.current) {
          //delIDInput('');
          setAlert(true);
        }
      })
  };
  
  const filterData = (e) => {
    e.preventDefault();
    //let fd = list.filter(dt => dt.item.includes(itemFilter));
    //setItemFilter('');
  }
  
  const changeFilterValue = (v) => {
    setItemFilter(v);
  }

  return(
	<div className="wrapper">
		<h1 className="text-center">My Grocery List</h1>
		<div className="pt-0 shadow rounded-3 overflow-hidden d-flex list-group" id="dropdownFilter">
			<div className="d-grid gap-1">
				<FilterData handleSubmit={filterData} handleChange={changeFilterValue} />
				<Groceries list={list} itemFilter={itemFilter} delItem={handleDelItem} handleUpdateItem={handleUpdateItem} handleStartUdate={su => setStartUdate(!su)} startUdate={startUdate} handleChangeItem={handleChangeItem}/>
				{alert && <h2> Submit Successful</h2>}
				<hr className="featurette-divider"/>
				<AddData handleSubmit={submitData} handleChange={v=>setItemInput(v)} itemInput={itemInput}/>
				
			</div>
		</div>
    </div>
  )
};

export default Grocery;
