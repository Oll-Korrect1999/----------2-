/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// import { Button } from "react-bootstrap";
//import firebaseImage from "../Images/firebase.jpg";
import profileImage from "../Images/sibainu.jpg";
import javascript from "../Images/javascript.jpg";
import typescript from "../Images/typescript.jpg";
import reactlogo from "../Images/reactlogo.jpg";

const HomePage = () => {
  return (
    <div className="container text-center">
      <h1>技術ノート</h1>

      <img src={profileImage} className="profileImage" />

      <p></p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">概要</h2>
            <h3 class="section-subheading text-muted mb-5">
              フロント開発言語学習における技術ノート
            </h3>
            <h4 class="section-subheading text-muted mb-5">
              開発言語/ライブラリ
            </h4>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <img src={javascript} />
              <h4 class="my-3">Javascript</h4>
              <p class="text-muted">動的Webページ作成の専門家</p>
            </div>
            <div class="col-md-4">
              <img src={typescript} />
              <h4 class="my-3">Typescript</h4>
              <p class="text-muted">
                JSに静的型付け、クラスベースオブジェクト指向等を加えたJSの上位互換
              </p>
            </div>
            <div class="col-md-4">
              <img src={reactlogo} />
              <h4 class="my-3">React</h4>
              <p class="text-muted">宣言型で効率的で柔軟なJSの相方ライブラリ</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
