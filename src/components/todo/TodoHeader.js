import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

const TodoHeader = (props) => (
  <CardHeader
    title={props.title}
    className="todoHeader"
  />
);

export default TodoHeader;
