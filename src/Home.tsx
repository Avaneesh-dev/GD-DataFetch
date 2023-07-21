import { useEffect } from 'react';
import getCookie from './getCookie';
function Home() {
  useEffect(() => {
		const user = getCookie('currentPassword');
		if (!user || user !== 'admin123') {
			window.location.href = '/login';
		}
	}, []);
  return (
    <div>
      <div>
        <a href="https://www.greendumbells.com" target="_blank">
          <img src='GDlogoHD.png' className="logo" alt="GD logo" />
        </a>
      </div>
      <h1>Green Dumbells</h1>
      <div>
        <a href='contactdata' className="heading">Contact form</a>
        <a href='surveydata' className="heading">Survey form</a>
        <a href='logout' className="heading">Logout</a>
      </div>
    </div>
  )
}

export default Home