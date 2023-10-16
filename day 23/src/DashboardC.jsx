// import { ThemeProvider,AppBar, Paper, TextField,Button } from '@mui/material';
import './Homepage.css';
// import Nav from './nav';
// import './logo.png'
// import { useNavigate } from 'react-router-dom';
// import * as React from 'react';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { useState } from 'react';
// import theme from './Stylee/Homepagestyle';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// function TabPanel(props) {
//   const { children, value, index, ...other } = props;
  
//   return (

//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }



// export default function Homepage() {
//   const navigate = useNavigate();
//   const [biodata, setBiodata] = useState({
//     phone:'',
//     uid: '',
//     department : '',
//     email : '',
//     name : '',
//     password : '',
//     tutor : '',
//     type : '',
//     username : '',
//     yearofstudy : ''
//   });
//     const handleDataChange = (e) => {
//       const { name, value } = e.target;
//       setBiodata((prevState) => ({
//           ...prevState,
//           [name]: value,
//       }));
//   };
//   const handleEdit = async (e) => {
//     e.preventDefault();

//     try {
//         alert('User details updated !');
//         navigate('/home');
//     } catch (error) {
//         console.error(error);
//     }
// };



//   const [details, setDetails] = useState({
//     opouttimedate : "Nil",
//     opintimedate : "Nil",
//     odouttimedate : "Nil",
//     odintimedate : "Nil",
//     mlfromdate : "Nil",
//     mltotimedate : "Nil"
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setDetails((prevState) => ({
//         ...prevState,
//         [name]: value,
//     }));
// };
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   return (
//     <ThemeProvider theme={theme}>
//       <Paper>
//       <AppBar sx={{ backgroundColor: 'white', color: 'black' }} elevation={2}>
//       <Nav/>
//         <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
//           <Tab label="Design" id='tag' />
//           <Tab label="Designers" id='tag1'/>
//           <Tab label="Renovators" id='tag2'/>
//           <Tab label="Design Products" id='tag3'/>
//         </Tabs>
//         {/* <div id = "backs">
//           <img src="./logo.png" id='back' alt="background" />
//         </div> */}
//       </AppBar>
//     <Box sx={{ width: '1540px',height:'800px',color:'transparent'}}>
//       <div id='tab1'></div>
//           <TabPanel value={value} index={0} id='hometab'>
                
//           </TabPanel>
//           <TabPanel value={value} index={1} id='tabhome' >
        
//           </TabPanel>
//           <TabPanel value={value} index={2} id='helptab'>
//           </TabPanel>
//           {/* Account page codes */}
//           <TabPanel value={value} index={3} id='accounttab'>
           
//           </TabPanel>
//         </Box>
//       </Paper>
//     </ThemeProvider>
//   );
// }
import React, { useState } from 'react';

const HomePage = () => {
 const [activeTab, setActiveTab] = useState('tab1');

 const handleTabClick = (tab) => {
    setActiveTab(tab);
 };

 return (
    <div className='main'>
      <div className='overlay'>
        <header>
          <h1>Header</h1>
        </header>
        <main >
          <div className="tabs">
            <button className={activeTab === 'tab1' ? 'active' : ''} onClick={() => handleTabClick('tab1')}>Tab 1</button>
            <button className={activeTab === 'tab2' ? 'active' : ''} onClick={() => handleTabClick('tab2')}>Tab 2</button>
            <button className={activeTab === 'tab3' ? 'active' : ''} onClick={() => handleTabClick('tab3')}>Tab 3</button>
          </div>
          <div className="tab-content">
            {activeTab === 'tab1' && <div>Content for Tab 1</div>}
            {activeTab === 'tab2' && <div>Content for Tab 2</div>}
            {activeTab === 'tab3' && <div>Content for Tab 3</div>}
          </div>
        </main>
      </div>
    </div>
 );
};

export default HomePage;