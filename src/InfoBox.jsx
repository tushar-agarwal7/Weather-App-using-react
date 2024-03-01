import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({info}){
    const init_url="https://images.unsplash.com/photo-1628525805814-cf9fe2582727?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const cold_url="https://plus.unsplash.com/premium_photo-1675276116240-51a71b0a8524?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29sZHxlbnwwfHwwfHx8MA%3D%3D"
    const hot_url="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const rain_url="https://images.unsplash.com/photo-1567688993206-43c34131b21f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnl8ZW58MHx8MHx8fDA%3D"
  
    return (
        <div className="infoBox">
        <div className='cardContainer'>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?rain_url:info.temp>15 ?hot_url : cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
       {info.city}{info.humidity>80 ?<ThunderstormIcon/>: info.temp>15?< WbSunnyIcon/> :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary">
               <p>Temperature={info.temp}</p>
               <p>Humidity={info.weather}</p>
               <p>Min Temp={info.tempMin}</p>
               <p>Max Temp={info.tempMax}</p>
               <p>The weather can be described as <i> {info.weather}</i> and feels like {info.feelsLike}&deg;C </p>
              </Typography>
      </CardContent>
      
    </Card>
    </div>
        </div>
    )
}