import React from 'react';
import "../css/Offre.css";

export default function Offre(props) {
    const {toggle, setToggle} = props;

  return (
    <>
    <div onClick={() => {setToggle(false)}} className={toggle?"containerModal":"ModalOff"}></div>
    <div className={`${toggle?"OffreOn":"OffreOff"}`}>
       <table class="table">
          <thead>
             <th>Trajet</th>
             <th>Voyage</th>
             <th>Vip</th>
             <th>Prémium</th>
             <th>Lite</th>
             <th>Départ</th>
          </thead>
          <tbody>
             <tr>
                <th>Toamasina</th>
                <td>Aller <hr/>
                  <td>Retour</td>
                </td>
                <td>60_000 Ar <hr/>
                  <td>60_000 Ar</td>
                </td>
                <td></td>
                <td></td>
                <td>07:00 - 08:00 <br />
                  19:00 - 20:00
                </td>
             </tr>
             <tr>
                <th>Fianarantsoa</th>
                <td>Aller <hr/>
                   <td>Retour</td>
                </td>
                <td></td>
                <td></td>
                <td> 30_000 Ar <hr/>
                   <td>30_000 Ar</td>
                </td>
                <td>07:30 - 08:00 <br />
                    19:30 - 20:00
                </td>
             </tr>
             <tr>
                <th>Majunga</th>
                <td> Aller <hr/>
                    <td>Retour</td>
                </td>
                <td></td>
                <td> 60_000 Ar <hr/>
                   <td>60_000 Ar</td>
                </td>
                <td></td>
                <td>07:00 - 08:00 <br />
                    19:00 - 20:00
                </td>
             </tr>
             <tr>
                <th>Antsiranana</th>
                <td> Aller <hr />
                    <td>Retour</td>
                </td>
                <td></td>
                <td></td>
                <td> 90_000 Ar <hr />
                    <td>90_000 Ar</td>
                </td>
                <td>07:00 - 08:00 <br />
                    17:00 - 18:00
                </td>
             </tr>
          </tbody>
       </table>
    </div> 
    </>
  );
}
