import React from "react";
import "./ThirdScreen.scss";
//import soosAndrasCircle from "../img/soosandrascircle.png"
import soosAndrasCircle2 from "../img/soosandrascircle2.png";
import czaierpetercircle from "../img/czaierpetercircle.png";
import womancircle from "../img/womancircle.png";
import milancircle from "../img/milancircle.png";
import { useState } from "react"

const ThirdScreen = () => {
  const [isSosMoreInfoClicked, setSosMoreInfo] = useState(false);
  const [isSosMore, setSosMore] = useState("tovább...");
  const [isHegedusMoreInfoClicked, setHegedusMoreInfo] = useState(false);
  const [isHegedusMore, setHegedusMore] = useState("tovább...");
  //const [isMilanMoreInfoClicked, setMilanMoreInfo] = useState(false);



  const handleSoosMoreInfoClick = () => {
    setSosMoreInfo(!isSosMoreInfoClicked)
    if(isSosMore === "tovább..."){
      setSosMore("Kevesebb")
    }
    else{
      setSosMore("tovább...")
    }
  }
  const handleHegedusMoreInfoClick = () => {
    setHegedusMoreInfo(!isHegedusMoreInfoClicked)
    if(isHegedusMore === "tovább..."){
      setHegedusMore("Kevesebb")
    }
    else{
      setHegedusMore("tovább...")
    }
  }

  return (
    <div className="third-screen-background">
      <div className="musicians-introduction-container" id="musicians">
        <h1>Zenekari tagok</h1>
        <div className="card" id="card1">
          <div className="img-container">
            <img src={soosAndrasCircle2} alt="" />
            <h6>Soós András</h6>
          </div>
          <div className="paragraph-container">
            <p>
              A hagyományairól és zenéjéről méltán híres erdélyi Széken születtem. A zene gyermekkoromtól kezdve meghatározza életemet. Családom Budapestre költözése után kezdtem hegedülni tanulni az Óbudai Népzenei Iskolában ifj. Csoóri Sándortól, akivel hamar közös zenekarban, az Ifjú Muzsikás együttesben muzsikálhattam. Első hanghordozójukon (Fehér és fekete) 11 éves voltam. Az útmutatás mellett nagyfokú szabadságot is kaptam és hamar felvehettem a „felnőtt” tempót a zenekarban.
   {!isSosMoreInfoClicked && <span className="clickable-div"  onClick={handleSoosMoreInfoClick} >
{isSosMore}
    </span>}
    
{isSosMoreInfoClicked && <span>
        Első saját zenekarom 2003-ban alakult Műhely zenekar néven. Ezen időszakban számos zenekarral muzsikáltam a budapesti népzenei élet aktív zenészeként. 2007-2016. között a 40 éves Téka együttes tagja voltam. A Téka együttes azon ritka zenekarok közé tartozik, akik kizárólag az autentikus zenei hangzásvilágot törekednek visszaadni koncertpódiumokon, ezzel bizonyítván a népzene gazdagságát, színességét. A 2009-ben megrendezésre került Kecskeméti Prímásversenyen első helyezést értem el. 2011-ben népművészet-közművelődés kategóriában Junior Príma díjat kaptam. 2013 és 2018 között a Hungarian FolkEmbassy művészeti vezetője és prímása voltam.
        Jelenleg a Soós András és zenekara nevű formációt vezetem. Olyan tehetséges fiatal barátokkal, akikkel közös célom, hogy a népzenét, mint önálló művészi értéket állítsak színpadra. Műsoraik szerkesztésének egyetlen szempontja a zenei esztétikum.
      </span>}
            </p>
          </div>
        </div>
        <div className="card" id="card2">
          <div className="img-container">
            <img src={czaierpetercircle} alt="" />
            <h6>Czaier Péter</h6>
          </div>
          <div className="paragraph-container">
            <p>
              Mindenkor adni: ezen érték mentén kezdtem népzenét tanulni, azért,
              hogy ezt a hagyományt adjam, tovább adjam mindazoknak, akiknek
              erre ,,füle” van. 9 évesen tekerőztem, majd tanárom, Havasréti Pál
              hatására bőgőzni kezdtem, amely hangszer azóta a fő hangszerem.
              Mestereim Havasréti Pál mellett Mohácsy Albert és Fervágner Csaba.
              Egyetemi tanulmányaim is a népzenéhez kapcsolódnak, itt Bíró
              Istvántól tanulom a mesterséget.
            </p>
          </div>
        </div>
        <div className="card" id="card3">
          <div className="img-container">
            <img src={womancircle} alt="" />
            <h6>Hegedűs Luca</h6>
          </div>
          <div className="paragraph-container">
            <p>
              Kecskeméten születtem 1987. július 25-én. Gyermekkoromtól a népzene és a néptánc bűvöletében éltem. Zenei tanulmányaimat klasszikus zenével kezdtem csellistaként. A zene mellett a néptánc is a gyermekkorom szerves része volt.
              Jelenleg a Hegedűs Együttesben és Soós András zenekarában muzsikálok.
              Az erdélyi magyar népzenét mai napig az egyik legkorszerűbb, legmélyebb mondanivalójú zenének tartom.
              {!isHegedusMoreInfoClicked && <span className="clickable-div"  onClick={handleHegedusMoreInfoClick} >
{isHegedusMore}
    </span>}

    {isHegedusMoreInfoClicked && <span>
                Éppen ezért csak autentikus magyar népzenét játszom.
                A népzene önmagában is megállja a helyét. Leginkább táncházakban, bálokban, lakodalmakban, keresztelőkön szeretek muzsikálni. Ezek olyan családi és társasági események, amelyek mindig szorosan összefüggtek a zenével, a tánccal. Ezeken az alkalmakon érzem úgy, hogy „kimuzsikálom” magam, nem marad hiányérzetem.
                Ugyanezt színházi körülmények között, nagyszínpadokon koncertezve nehéz, csaknem lehetetlen megélni.
                Kivételes helyzetben vagyok, hiszen tudomásom szerint nőként jelenleg én vagyok az egyetlen népzenét cimbalmon játszó aktív táncházi zenész Magyarországon.
              </span>}
            </p>
          </div>
        </div>
        <div className="card" id="card4">
          <div className="img-container">
            <img src={milancircle} alt="" />
            <h6>Hetényi Milán</h6>
          </div>
          <div className="paragraph-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              quas provident illum reprehenderit autem officia laudantium
              nostrum nihil. Veritatis dolorem autem iusto, perspiciatis vel
              dolore repellendus commodi assumenda dolores laudantium a
              doloremque, debitis nemo aliquam, ipsa exercitationem porro
              similique expedita hic magni temporibus. Dolorem tenetur ullam
              fuga, explicabo eius quia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdScreen;
