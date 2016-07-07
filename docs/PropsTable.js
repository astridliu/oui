import React from 'react';

const PropsTable = ( props ) => {
  let componentProps = props.componentProps;

  return (
    <table className="table">
      <thead>
        <tr className="border--bottom background--faint">
          <th className="soft width--1-6">Prop</th>
          <th className="soft width--1-8">Type</th>
          <th className="soft">Description</th>
        </tr>
      </thead>
      <tbody>

      {componentProps && Object.keys(componentProps).map( (prop, i) => {

        const theProp = componentProps[prop];
        let type = theProp.type && theProp.type.name;

        if (type === 'enum') {
          type = theProp.type.value.map( (v,j) =>
            {
              return (
                <li key={j}>{v.value}</li>
              )
            }
          );
        }

        return (
          <tr className="border--bottom" key={i}>
            <td className="soft">
              <span className="weight--bold">{ prop }</span>
            </td>
            <td className="soft"><ul>{ type }</ul></td>
            <td className="soft">{ theProp.description }</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

PropsTable.propTypes = {
  props: React.PropTypes.object
}

export default PropsTable;
