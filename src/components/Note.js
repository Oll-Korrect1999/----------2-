import React from "react";

// const Note = () => {
//   return (
//     <div>
//       <section id="note">
//         <div class="container text-center">
//           <h1 class="title">技術ノート</h1>
//           <div class="row container text-center">
//             <div class="col-md-7 services">
//               {/* <img src={reactImage} /> */}
//               {/* <img src={toyo} /> */}
//               <h4>とり天_東洋軒</h4>
//               <a href="https://www.toyoken-beppu.co.jp/"> URL</a>
//             </div>
//             <div class="col-md-4 services">
//               {/* <img src={jsImage} /> */}
//               {/* <img src={aji} /> */}
//               <h4>とり天_あじくら</h4>
//               <a href="https://ajikura.info/"> URL</a>
//             </div>
//             {/* <div class="col-md-4 services">
//               <img src={firebaseImage} />
//               <h4>Firebase</h4>
//               <p>Firebaseがつかえます</p>
//             </div> */}
//           </div>
//           {/* <button type="button" class="btn btn-primary">
//             スキル一覧
//           </button> */}
//         </div>
//       </section>
//     </div>
//   );
// };

const Note = () => {
  return (
    <div>
      <section id="note">
        <div class="container text-center">
          <h4 class="title">技術ノート</h4>
          <div class="row container text-center">
            <div class="memoApp">
              <div class="memoForm">
                <input
                  type="text"
                  id="title"
                  class="form-control"
                  placeholder="タイトル"
                />
                <textarea
                  class="form-control"
                  rows="3"
                  placeholder="本文"
                  id="body"
                ></textarea>
                <button
                  type="button"
                  class="btn btn-primary btn-block"
                  id="btnAdd"
                >
                  追加
                  {/* <FlatList data={}></> */}
                </button>
              </div>

              <div id="memoArea"></div>

              <button
                type="button"
                class="btn btn-primary btn-block"
                id="btnReset"
              >
                リセット
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Note;
