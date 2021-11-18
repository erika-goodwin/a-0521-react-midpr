import React from "react";

const IconPick =(props)=> {
  const iconId = props.iconId;
  const iconArray = [
    {
      id: "01d",
      des: "ClearSky",
      icon: "https://img.icons8.com/doodle/96/000000/sun--v1.png",
    },
    {
      id: "01n",
      des: "ClearSky",
      icon: "https://img.icons8.com/doodle/96/000000/bright-moon--v1.png",
    },
    {
      id: "02d",
      des: "fewClouds",
      icon: "https://img.icons8.com/doodle/48/000000/partly-cloudy-day--v1.png",
    },
    {
      id: "02n",
      des: "fewClouds",
      icon: "https://img.icons8.com/doodle/96/000000/moon-and-sun.png",
    },
    {
      id: "03d",
      des: "scatteredClouds",
      icon: "https://img.icons8.com/doodle/48/000000/partly-cloudy-day--v1.png",
    },
    {
      id: "03n",
      des: "scatteredClouds",
      icon: "https://img.icons8.com/doodle/96/000000/moon-and-sun.png",
    },
    {
      id: "04d",
      des: "brokenClouds",
      icon: "https://img.icons8.com/doodle/48/000000/partly-cloudy-day--v1.png",
    },
    {
      id: "04n",
      des: "brokenClouds",
      icon: "https://img.icons8.com/doodle/96/000000/moon-and-sun.png",
    },
    {
      id: "09d",
      des: "showerRain",
      icon: "https://img.icons8.com/doodle/96/000000/--cloud-umbrella.png",
    },
    {
      id: "09n",
      des: "showerRain",
      icon: "https://img.icons8.com/doodle/96/000000/--cloud-umbrella.png",
    },
    {
      id: "10d",
      des: "rain",
      icon: "https://img.icons8.com/doodle/96/000000/--cloud-umbrella.png",
    },
    {
      id: "10n",
      des: "rain",
      icon: "https://img.icons8.com/doodle/96/000000/--cloud-umbrella.png",
    },
    {
      id: "11d",
      des: "thunderstorm",
      icon: "https://img.icons8.com/doodle/96/000000/cloud-lighting.png",
    },
    {
      id: "11n",
      des: "thunderstorm",
      icon: "https://img.icons8.com/doodle/96/000000/cloud-lighting.png",
    },
    {
      id: "13d",
      des: "snow",
      icon: "https://img.icons8.com/doodle/96/000000/snow--v1.png",
    },
    {
      id: "13n",
      des: "snow",
      icon: "https://img.icons8.com/doodle/96/000000/snow--v1.png",
    },
    {
      id: "50d",
      des: "mist",
      icon: "https://img.icons8.com/doodle/48/000000/partly-cloudy-day--v1.png",
    },
    {
      id: "50n",
      des: "mist",
      icon: "https://img.icons8.com/doodle/96/000000/moon-and-sun.png",
    },
  ];
  const foundSame = iconArray.find(element=>element.id = iconId)

  return (
    <>
    <img src={foundSame.icon} alt='icon' /> 
    </>
  );
}

export default IconPick
