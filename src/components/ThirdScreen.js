import React from "react";
import "./ThirdScreen.scss";
//import soosAndrasCircle from "../img/soosandrascircle.png"
import soosAndrasCircle2 from "../img/soosandrascircle2.png"
import czaierpetercircle from "../img/czaierpetercircle.png"
import womancircle from "../img/womancircle.png"
import milancircle from "../img/milancircle.png"

const ThirdScreen = () => {
    return (
        <div className="third-screen-background">
            <div className="musicians-introduction-container" id="musicians">
                <h1>Zenekari tagok</h1>
                <div className="card" id="card1" >
                    <div className="img-container">
                        <img src={soosAndrasCircle2} alt="" />
                        <h6>Soós András</h6>
                    </div>
                    <div className="paragraph-container">

                        <p>Soós András a hagyományairól és zenéjéről méltán híres erdélyi Széken született. A zene gyermekkorától kezdve meghatározza életét. Családja Budapestre költözése után kezdett hegedülni tanulni az Óbudai Népzenei Iskolában ifj. Csoóri Sándortól, akivel hamar közös zenekarban, az Ifjú Muzsikás együttesben muzsikálhatott. Első hanghordozójukon (Fehér és fekete) 11éves volt. Az útmutatás mellett nagyfokú szabadságot is kapott és hamar felvehette a „felnőtt” tempót a zenekarban. Első saját zenekara 2003-ban alakult Műhely zenekar néven. Ezen időszakban számos zenekarral muzsikált a budapesti népzenei élet aktív zenészeként. 2007-2016. között a 40 éves Téka együttes tagja volt. A Téka együttes azon ritka zenekarok közé tartozik, akik kizárólag az autentikus zenei hangzásvilágot törekednek visszaadni koncertpódiumokon, ezzel bizonyítván a népzene gazdagságát, színességét. A 2009-ben megrendezésre került Kecskeméti Prímásversenyen első helyezést ért el. 2011-ben népművészet-közművelődés kategóriában Junior Príma díjat kapott. 2013 és 2018 között a Hungarian FolkEmbassy művészeti vezetője és prímása volt. Rendszeresen közreműködik Sebestyén Márta formációiban.
</p>
                    </div>
                </div>
                <div className="card" id="card2" >
                    <div className="img-container">
                        <img src={czaierpetercircle} alt="" />
                        <h6>Czaier Péter</h6>
                    </div>
                    <div className="paragraph-container">

                        <p>Mindenkor adni: ezen érték mentén kezdtem népzenét tanulni, azért, hogy ezt a hagyományt adjam, tovább adjam mindazoknak, akiknek erre ,,füle” van.
                        9 évesen tekerőztem, majd tanárom, Havasréti Pál hatására bőgőzni kezdtem, amely hangszer azóta a fő hangszerem. Mestereim Havasréti Pál mellett Mohácsy Albert és Fervágner Csaba.
                        Egyetemi tanulmányaim is a népzenéhez kapcsolódnak, itt Bíró Istvántól tanulom a mesterséget.
</p>
                    </div>
                </div>
                <div className="card" id="card3" >
                    <div className="img-container">
                        <img src={womancircle} alt="" />
                        <h6>Soós András</h6>
                    </div>
                    <div className="paragraph-container">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quas provident illum reprehenderit autem officia laudantium nostrum nihil. Veritatis dolorem autem iusto, perspiciatis vel dolore repellendus commodi assumenda dolores laudantium a doloremque, debitis nemo aliquam, ipsa exercitationem porro similique expedita hic magni temporibus. Dolorem tenetur ullam fuga, explicabo eius quia.</p>
                    </div>
                </div>
                <div className="card" id="card4" >
                    <div className="img-container">
                        <img src={milancircle} alt="" />
                        <h6>Soós András</h6>
                    </div>
                    <div className="paragraph-container">

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, quas provident illum reprehenderit autem officia laudantium nostrum nihil. Veritatis dolorem autem iusto, perspiciatis vel dolore repellendus commodi assumenda dolores laudantium a doloremque, debitis nemo aliquam, ipsa exercitationem porro similique expedita hic magni temporibus. Dolorem tenetur ullam fuga, explicabo eius quia.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ThirdScreen;
