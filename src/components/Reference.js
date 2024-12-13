/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import nagamasa from "../Images/nagamasa.jpg";
import menta from "../Images/menta.jpg";
import toyo from "../Images/toyo.jpg";
import aji from "../Images/aji.jpg";

const Reference = () => {
  return (
    <div>
      <section id="fukuoka">
        <div class="container text-center">
          <h1 class="title">JS</h1>
          <div class="row container text-center">
            <div class="col-md-7 services">
              {/* <img src={reactImage} /> */}
              <img src={nagamasa} />
              <h4>もつ鍋_ながまさ</h4>
              <a href="http://nagamasa-hakata.com/"> URL</a>
            </div>
            <div class="col-md-4 services">
              {/* <img src={jsImage} /> */}
              <img src={menta} />
              <h4>明太中毒</h4>
              <a href="https://yokanavi.com/yatai/list/"> URL</a>
            </div>
            {/* <div class="col-md-4 services">
              <img src={firebaseImage} />
              <h4>Firebase</h4>
              <p>Firebaseがつかえます</p>
            </div> */}
          </div>
          {/* <button type="button" class="btn btn-primary">
            スキル一覧
          </button> */}
        </div>
      </section>
      <section id="oita">
        <div class="container text-center">
          <h1 class="title">TS</h1>
          <div class="row container text-center">
            <div class="col-md-7 services">
              {/* <img src={reactImage} /> */}
              <img src={toyo} />
              <h4>とり天_東洋軒</h4>
              <a href="https://www.toyoken-beppu.co.jp/"> URL</a>
            </div>
            <div class="col-md-4 services">
              {/* <img src={jsImage} /> */}
              <img src={aji} />
              <h4>とり天_あじくら</h4>
              <a href="https://ajikura.info/"> URL</a>
            </div>
            {/* <div class="col-md-4 services">
              <img src={firebaseImage} />
              <h4>Firebase</h4>
              <p>Firebaseがつかえます</p>
            </div> */}
          </div>
          {/* <button type="button" class="btn btn-primary">
            スキル一覧
          </button> */}
        </div>
      </section>
    </div>
  );
};

export default Reference;
