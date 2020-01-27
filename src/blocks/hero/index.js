
import {registerBlockType} from '@wordpress/blocks';

const heroIcon = () => {
   const svgStyle = {
      shapeRendering: 'geometricPrecision',
      textRendering: 'geometricPrecision',
      imageRendering: 'optimizeQuality',
      fillRule: 'evenodd',
      clipRule: 'evenodd'
   };
   const rectStyle = {
      fill: 'white',
      fillOpacity: 0,
      pointerEvents: 'none'
   };
   return (
      <svg id="master-artboard" viewBox="0 0 20 16" xmlns="http://www.w3.org/2000/svg" width="20px" height="16px" version="1.1" style={svgStyle}>
         <rect id="ee-background" x="0" y="0" width="20" height="16" style={rectStyle} transform="matrix(1, 0, 0, 1, -4, 0)"/>
         <g transform="matrix(0.023980814963579174, 0, 0, 0.024115797132253647, -0.8190102577209473, -0.06535547971725464)">
            <path d="M448 646L31 160 172 24h552l141 136-417 486z" fill="#f70000" stroke="#000" strokeWidth="6"/>
            <g fill="#fff800" stroke="#000" strokeWidth="4">
               <path d="M206.949 298.431L278.5 383c39.277-36.18 131.561-27.859 160.25 21.5 79.642 1.258 146.988 5.246 173.247-26.589 7.437-10.468 9.66-21.991-.295-29.753-47.004-32.067-215.51-15.164-404.753-49.727zM93 163.75c-1 .25 99.279-96.5 99.279-96.5h48.471c-49.449 39.559-84.132 94.132-99.345 153.714L93 163.75zM348.858 461.594L448 577.005l94.922-110.499c-48.188 11.315-101.739 16.908-194.064-4.912z" strokeMiterlimit="2"/>
               <path d="M593.75 67.25h42c.924 15.344-6.486 25.218-11.13 30.086-9.766-13.822-25.202-26.836-30.87-30.086z" strokeMiterlimit="4"/>
               <path d="M709.255 275.885L803 163.75l-67.964-67.224v75.661h-140.36c-3.222-73.174-77.331-104.613-163.592-103.643-79.243.892-145.398 20.85-151.584 64.956-6.041 24.915 21.4 66.906 187.5 58.5 132.198-2.923 213.238 26.099 242.255 83.885z"/>
            </g>
         </g>
      </svg>
   )
};

registerBlockType('acme/hero', {
   title: 'Hero Module',
   icon: () => heroIcon(),
   category: 'common',
   attributes:{
      header: {
         type: 'string',
      },
      subheader: {
         type: 'string',
      }
   },
   edit: (props) => {
      const {attributes,className,setAttributes} = props;
      const updateHeader = (event) => {
         setAttributes({header: event.target.value})
      };
      const updateSubheader = (event) => {
         setAttributes({subheader: event.target.value})
      };
      const divStyle = {
         border: "1px solid red",
         padding: "0 2em"
      };
      const titleStyle = {
         margin: "-1em 0 0 -1em",
         background: "white",
         fontSize: "1.25em",
         width: "3.7em"
      };
      return (
         <div className={className} style={divStyle}>
            <div style={titleStyle}>[ Hero ]</div>
            <p>
               <label htmlFor="header">Header: </label><br/>
               <input id="header" type="text" size="75" value={attributes.header} onChange={updateHeader} />
            </p>
            <p>
               <label htmlFor="subheader">Subheader: </label><br/>
               <textarea id="subheader" rows="3" cols="74" onChange={updateSubheader}>{attributes.subheader}</textarea>
            </p>
         </div>
      )
   }
   ,
   // save: (props) => {
   //    const {attributes,className,setAttributes} = props;
   //    return (
   //       <div class={props.className}>
   //          <h2>{attributes.header}</h2>
   //          <p>{attributes.subheader}</p>
   //       </div>
   //    )
   // }
});
