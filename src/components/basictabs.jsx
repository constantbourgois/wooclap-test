import * as React from 'react';
import PropTypes from 'prop-types';
import BasicSelect from './basicselect';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PieChartIcon from '@mui/icons-material/PieChart';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" textColor="primary"
          indicatorColor="primary">
          <Tab icon={<TextSnippetIcon />} label="Insert questions" {...a11yProps(0)} />
          <Tab icon={<PhotoSizeSelectActualIcon />} label="Update presentation" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel className="question-container" value={value} index={0}>
        <span className="question"><PieChartIcon color="secondary" /><span>Question 1</span></span>
        <span className="question"><PieChartIcon color="secondary" /><span>Question 2</span></span>
        <span className="question"><PieChartIcon color="secondary" /><span>Question 3</span></span>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BasicSelect />
      </TabPanel>
    </Box>
  );
}