import React, { useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { Button } from "../components";
import rivaldealer from "../assets/rivaldealer-cover.png";
import couple from "../assets/couple.jpg";
import back from "../assets/rivaldealer-back.jpg";
import concrete from "../assets/concrete.jpg";
import stairs from "../assets/stairs.jpg";
import { Logotext } from "../assets";
import epfront from "../assets/ep-front.jpg";

export const Frontpage = () => {
  return (
    <Wrapper
      onWheel={e => {
        console.log(e.deltaY);
        console.log(document.documentElement.getBoundingClientRect());
        if (e.deltaY > 0) {
          e.currentTarget.scrollLeft += e.currentTarget.offsetWidth / 2;
        } else {
          e.currentTarget.scrollLeft -= e.currentTarget.offsetWidth / 2;
        }
      }}
    >
      <section className="intro">
        <div className="image-control">
          <img src={rivaldealer} alt="" />
        </div>
        <div className="control">
          <div className="logo-control">
            <Logotext />
          </div>
          {/* <h1>
            rival
            <span className="h1-bold"> dealer </span>
          </h1> */}
          <div className="underline"></div>
          <Button text={"view more"} />
        </div>
      </section>

      <section className="section-two">
        <div className="image-section">
          <div className="image">
            <img src={couple} alt="" />
          </div>
        </div>
        <div className="text-section">
          <p>
            The seismic stylistic shift that Bevan's made on these three
            tracks—two of which, true to recent form, run well over the
            10-minute mark—is immediately apparent on the opening minutes of
            Rival Dealer's title track, when a distorted vocal sample of
            adult-contemporary cheeseball Gavin DeGraw's "More Than Anyone"
            (yes, really) gives way to a furious drum break, making for Burial's
            most straightforwardly uptempo move to date. The rhythm
            simultaneously sounds crisp and hissing, eventually disintegrating
            in a blare of police-scanner noise before everything goes truly
            pear-shaped with a monstrous, buzzing bassline, as a woodblock
            rhythm from the Untrue days clicks and clacks below the chaos. In
            the few interviews that Bevan has given throughout his career, he's
            outlined Burial's conceptual aims as a tribute to the rave music he
            didn't get a chance to grow up with but experienced second-hand; the
            unbridled intensity of "Rival Dealer" is arguably his most
            explicitly rave-y move yet.
          </p>
          <div className="control">
            <h6>a1</h6>
            <h2>
              rival <span className="h2-bold">dealer</span>
            </h2>
          </div>
        </div>
        <div className="previews">
          <div className="preview preview-back">
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/Uuwc6MzbB9w"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="preview preview-front">
            <img src={epfront} alt="" />
          </div>
        </div>
      </section>

      <section className="section-two">
        <div className="image-section">
          <div className="image">
            <img src={concrete} alt="" />
          </div>
        </div>
        <div className="text-section">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            tempora consequatur, omnis natus autem, officia tempore nobis
            voluptates totam commodi, nam ab. Unde, molestiae dolorem. Eligendi
            minima ad velit blanditiis dicta incidunt? Debitis velit quibusdam
            quasi tempore aperiam natus sunt officia quos omnis consectetur
            voluptatum, eos commodi ex voluptate! Excepturi, tenetur optio.
            Aliquam nemo ab quis consequuntur aut maiores unde cupiditate,
            dolores amet dignissimos cum blanditiis itaque alias, modi quas
            porro a eveniet in similique, temporibus nihil incidunt quia nobis
            sed. Necessitatibus porro nemo quidem, laudantium perferendis fuga
            totam nostrum corrupti temporibus molestias iste, aliquid accusamus
            ex modi aspernatur eos impedit labore est numquam possimus? Nesciunt
            eveniet consequuntur atque, natus explicabo, sunt molestias omnis
            iusto distinctio eaque corporis recusandae eum iste laudantium?
            Ducimus fugit nemo pariatur adipisci fuga cupiditate modi impedit
            necessitatibus quia? Sed et vitae eveniet fuga totam explicabo
            magnam asperiores dignissimos repellendus, voluptate, quas non illum
            id necessitatibus.
          </p>
          <div className="control">
            <h6>b1</h6>
            <h2>hiders</h2>
          </div>
        </div>
        <div className="previews">
          <div className="preview preview-back">
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/uQAOeG0dooc"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="preview preview-front">
            <img src={back} alt="" />
          </div>
        </div>
      </section>

      <section className="section-two">
        <div className="image-section">
          <div className="image">
            <img src={stairs} alt="" />
          </div>
        </div>
        <div className="text-section">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            tempora consequatur, omnis natus autem, officia tempore nobis
            voluptates totam commodi, nam ab. Unde, molestiae dolorem. Eligendi
            minima ad velit blanditiis dicta incidunt? Debitis velit quibusdam
            quasi tempore aperiam natus sunt officia quos omnis consectetur
            voluptatum, eos commodi ex voluptate! Excepturi, tenetur optio.
            Aliquam nemo ab quis consequuntur aut maiores unde cupiditate,
            dolores amet dignissimos cum blanditiis itaque alias, modi quas
            porro a eveniet in similique, temporibus nihil incidunt quia nobis
            sed. Necessitatibus porro nemo quidem, laudantium perferendis fuga
            totam nostrum corrupti temporibus molestias iste, aliquid accusamus
            ex modi aspernatur eos impedit labore est numquam possimus? Nesciunt
            eveniet consequuntur atque, natus explicabo, sunt molestias omnis
            iusto distinctio eaque corporis recusandae eum iste laudantium?
            Ducimus fugit nemo pariatur adipisci fuga cupiditate modi impedit
            necessitatibus quia? Sed et vitae eveniet fuga totam explicabo
            magnam asperiores dignissimos repellendus, voluptate, quas non illum
            id necessitatibus.
          </p>
          <div className="control">
            <h6>b2</h6>
            <h2>
              come<span className="h2-bold"> down to us</span>
            </h2>
          </div>
        </div>
        <div className="previews">
          <div className="preview preview-back">
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/9GB7uMqTAFs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="preview preview-front">
            <img src={back} alt="" />
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
  display: flex;

  section {
    flex: none;
    height: inherit;
    scroll-snap-align: start;
    display: flex;
  }
  .intro {
    display: grid;
    place-content: center;
    width: 40vw;
    position: relative;
    .image-control {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    .control {
      display: grid;
      justify-items: start;
      justify-items: center;
      gap: var(--vspace-3);
      padding: 40px;
      .logo-control {
        max-width: 400px;
        align-self: center;
        justify-self: center;
        svg {
          width: 100%;
          height: 100%;
        }
      }
      h1 {
        word-wrap: break-word;
        max-width: 500px;
      }
      .button {
        position: absolute;
        top: 700px;
      }
    }
  }
  .section-two {
    position: relative;
    display: grid;
    width: 80vw;
    /* grid-template-columns: 40vw 40vw; */
    grid-template-columns: 0.5fr 1fr 0.5fr 1fr 0.5fr 1fr 0.5fr 1fr;
    grid-template-rows: 1fr repeat(3, 5vw 1fr 0.5fr) 1fr;

    .image-section {
      grid-column: 1/5;
      grid-row: 1/12;

      .image {
        width: 100%;
        height: 100%;
        position: relative;

        /* border: 4px solid var(--black-main); */
        /* &:before {
          content: "";
          position: absolute;
          inset: 0;
          border: 2px solid white;
          mix-blend-mode: difference;
          transform: translate(-5%, -5%, 5%);
          transition: all 500ms ease-in-out;
        }
        &:after {
          content: "";
          position: absolute;
          inset: 5px;
          border: 2px solid white;
          mix-blend-mode: difference;
          transform: translate3d(-5%, -5%, 5%);
          transition: all 500ms ease-in-out 250ms;
        }
        &:hover {
          &:before {
            transform: translate3d(-5%, -5%, 0);
          }
          &:after {
            transform: translate3d(-10%, -10%, 0);
          }
        } */
      }
    }
    .text-section {
      grid-column: 5/-1;
      grid-row: 1/7;
      padding: 40px;
      display: grid;
      align-items: flex-end;

      /* h2 {
        background-color: white;
        mix-blend-mode: difference;
      } */
    }
    .preview {
      aspect-ratio: 16/9;
      background-color: black;

      iframe {
        width: 100%;
        height: 100%;
      }

      /* top: 70%;
      left: 40%; */
    }
    .previews {
      z-index: 2;
      grid-column: 4/5;
      grid-row: 7/10;
      display: flex;
      gap: var(--vspace-1);
    }
    /* .preview-front {
      grid-column: 5/6;
      grid-row: 4/5;
    }
    .preview-back {
      grid-column: 6/7;
      grid-row: 4/5;
    } */
  }
`;
