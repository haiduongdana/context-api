import React, { useEffect, useRef, useState } from 'react';
import Item from './Item';

import logo from '../../media/img/logo.svg';

const Groceries = (pros) => {
  return(
  	<>
		{
    pros.list.length?
			<ul className="list-unstyled mb-0">
			  {pros.list
					.filter(dt => dt.item.includes(pros.itemFilter))
			  		.map(item => <Item key={item.id} item={item} delItem={pros.delItem} handleUpdateItem={pros.handleUpdateItem} handleStartUdate={pros.handleStartUdate} startUdate={pros.startUdate} handleChangeItem={pros.handleChangeItem}/>)
			  	}
			</ul>
		: <div className="text-center">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    }
  	</>
  )
};

export default Groceries;