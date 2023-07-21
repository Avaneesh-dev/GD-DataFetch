import { useEffect, useState } from 'react';
import axios from 'axios';
import getCookie from './getCookie';
const Table = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const user = getCookie('currentPassword');
    if (!user || user !== 'admin123') {
      window.location.href = '/login';
    }
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://ktjbackend-git-starter-code-avaneesh-dev.vercel.app/contactform'); // Replace with your server API endpoint
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  interface MyObject {
    [key: string]: any;
  }

  function convertArrayToCSV(data: MyObject[], filename: string) {
    const csvContent = generateCSVContent(data);
    const csvData = new Blob([csvContent], { type: 'text/csv' });

    // Create a download link and set the CSV file as the href
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(csvData);
    downloadLink.setAttribute('download', filename);

    // Simulate a click on the download link to trigger the file download
    downloadLink.click();
  }

  function generateCSVContent(data: MyObject[]): string {
    const keys = Object.keys(data[0]);

    const headerRow = keys.join(',') + '\n';

    const rows = data.map(obj => {
      const values = keys.map(key => {
        const value = obj[key];

        // Convert arrays to a single value with brackets
        if (Array.isArray(value)) {
          return `"${value.join(', ')}"`;
        }

        // Enclose values containing commas within double quotes
        if (value && value.toString().includes(',')) {
          return `"${value}"`;
        }

        return value;
      });

      return values.join(',');
    });

    return headerRow + rows.join('\n');
  }
  const proper = (old: any) => {
    const date = new Date(old);
    // Extract the individual components of the date and time
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // Format the components as a human-readable date and time string
    const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime
  }
  return (
    <>
      <div>
        <a href="https://www.greendumbells.com" target="_blank">
          <img src='GDlogoHD.png' className="logo" alt="GD logo" />
        </a>
      </div>
      <h1>Contact Us Form Data</h1>
      <button onClick={() => convertArrayToCSV(data, "contactData")}>Save to CSV file</button>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Can contact</th>
            <th>timeslot</th>
            <th>feedback</th>
            <th>timestamp</th>
            {/* Add more table headers based on your data */}
          </tr>
        </thead>
        <tbody>
          {
            data.map((item: any, i) => (
              <tr key={item._id}>
                <td className='card'>{i + 1}</td>
                <td className='card'>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{JSON.stringify(item.canWeConnect)}</td>
                <td>{item.timeslot}</td>
                <td>{item.feedback}</td>
                <td>{proper(item.createdAt)}</td>
                {/* Add more table cells based on your data */}
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;