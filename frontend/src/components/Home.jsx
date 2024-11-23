import React from 'react'
import { SignedIn, SignedOut, SignInButton, SignOutButton, useAuth } from "@clerk/clerk-react";

function Home() {
  const { isLoaded, signOut } = useAuth();

  // Ensure Clerk authentication state is loaded
  if (!isLoaded) return null;

  return (
    <>
  <header className="main-header" id="mainHeader">
    <div className="main-header-container">
      <div className="main-logo">
        <a
          href="/"
          aria-label="Renderforest homepage"
          data-auth-href="/home/main/for-you"
        >
          <picture></picture>
        </a>
      </div>
      <nav className="tablet-nav">
        <ul className="tablet-nav__list">
          <li className="tablet-nav__item">
            <a className="tablet-nav__link" href="/#">
              Videos
            </a>
          </li>
          <li className="tablet-nav__item">
            <a className="tablet-nav__link" href="/#">
              Websites
            </a>
          </li>
          <li className="tablet-nav__item">
            <a className="tablet-nav__link" href="/#">
              Logos
            </a>
          </li>
          <li className="tablet-nav__item">
            <a className="tablet-nav__link" href="/#">
              Mockups
            </a>
          </li>
          <li className="tablet-nav__item">
            <a className="tablet-nav__link" href="/#" aria-label="Designs">
              Designs
            </a>
          </li>
        </ul>
      </nav>
      <div className="menu-right-wrapper" id="smallMenu">
        <div className="main-menu-wrapper">
          <div className="main-navbar">
            <nav className="main-nav-wrapper">
              <div className="main-nav-opener nav-mobile-item hidden">
                Create
                <span className="nav-item-caret">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <rect
                      data-name="Rectangle 21224"
                      width={24}
                      height={24}
                      fill="none"
                    />
                    <path
                      data-name="Arrow - Right 2"
                      d="M5.778,4.279c-.034.035-.162.184-.281.306A13.014,13.014,0,0,1,2.02,7a2.77,2.77,0,0,1-.707.2,1.16,1.16,0,0,1-.537-.131A1.124,1.124,0,0,1,.3,6.527a5.9,5.9,0,0,1-.154-.638A14.387,14.387,0,0,1,0,3.6,16.635,16.635,0,0,1,.128,1.391a5.1,5.1,0,0,1,.2-.8A1.071,1.071,0,0,1,1.279,0h.034a2.927,2.927,0,0,1,.793.245,13.014,13.014,0,0,1,3.4,2.38,3.4,3.4,0,0,1,.289.332A1.07,1.07,0,0,1,6,3.6a1.125,1.125,0,0,1-.222.683"
                      transform="translate(15.199 10) rotate(90)"
                      fill="#545F7E"
                    />
                  </svg>
                </span>
              </div>
              <ul className="main-nav nav-mobile-list">
                {/* Videos*/}
                <li className="main-nav-item nav-mobile-subitem">
                  <div className="nav-item-link homepage mobile-side-trigger videos">
                    Videos
                    <span className="nav-item-caret">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <rect
                          data-name="Rectangle 21224"
                          width={24}
                          height={24}
                          fill="none"
                        ></rect>
                        <path
                          data-name="Arrow - Right 2"
                          d="M5.778,4.279c-.034.035-.162.184-.281.306A13.014,13.014,0,0,1,2.02,7a2.77,2.77,0,0,1-.707.2,1.16,1.16,0,0,1-.537-.131A1.124,1.124,0,0,1,.3,6.527a5.9,5.9,0,0,1-.154-.638A14.387,14.387,0,0,1,0,3.6,16.635,16.635,0,0,1,.128,1.391a5.1,5.1,0,0,1,.2-.8A1.071,1.071,0,0,1,1.279,0h.034a2.927,2.927,0,0,1,.793.245,13.014,13.014,0,0,1,3.4,2.38,3.4,3.4,0,0,1,.289.332A1.07,1.07,0,0,1,6,3.6a1.125,1.125,0,0,1-.222.683"
                          transform="translate(15.199 10) rotate(90)"
                          fill="#545F7E"
                        />
                      </svg>
                    </span>
                    <div className="nav-dropdown mobile-side-wrap">
                      <div className="nav-dropdown_header">
                        <span className="mobile-side-back" />
                        <a
                          className="nav-dropdown_header-title mobile-side-link videos"
                          href="/templates"
                          data-auth-href="/home/templates/videos"
                        >
                          <span>Create Video</span>
                        </a>
                      </div>
                      <div className="nav-dropdown_container">
                        <div className="nav-dropdown_list-wrap">
                          <ul className="nav-dropdown_list">
                            <li className="nav-dropdown_item">
                              <a
                                className="nav-dropdown_link"
                                href="/intro-videos"
                                data-auth-href="/home/templates/videos/intro-videos"
                              >
                                Intros
                              </a>
                            </li>
                            <li className="nav-dropdown_item">
                              <a
                                className="nav-dropdown_link"
                                href="/animation-videos"
                                data-auth-href="/home/templates/videos/animation-videos"
                              >
                                Animations
                              </a>
                            </li>
                            <li className="nav-dropdown_item">
                              <a
                                className="nav-dropdown_link"
                                href="/music-visualisations"
                                data-auth-href="/home/templates/videos/music-visualisations"
                              >
                                Music Visualizations
                              </a>
                            </li>
                            <li className="nav-dropdown_item">
                              <a
                                className="nav-dropdown_link"
                                href="/video-editing"
                                data-auth-href="/home/templates/videos/video-editing"
                              >
                                Video Editing
                              </a>
                            </li>
                            <li className="nav-dropdown_item">
                              <a
                                className="nav-dropdown_link"
                                href="/presentation-videos"
                                data-auth-href="/home/templates/videos/presentation-videos"
                              >
                                Video Presentations
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="main-nav-item nav-mobile-subitem  ">
                  <div className="nav-item-wrap nav-item-link homepage mobile-side-trigger mockups active">
                    Mockups
                  </div>
                </li>
                {/* Designs*/}
                <li className="main-nav-item nav-mobile-subitem  ">
                  <div className="nav-item-wrap nav-item-link homepage mobile-side-trigger designs active">
                    Designs
                  </div>
                </li>
              </ul>
            </nav>
            <div className="main-nav-item main-nav-ai">
              <div className="nav-item-link homepage main-nav-opener nav-mobile-item">
                Explore AI
                <div className="main-nav-ai__icon" />
              </div>
            </div>
            <div
              className="sign-btns"
              id="header-anonym-menu"
              style={{ display: "flex" }}
            >
              <SignedOut>
                <SignInButton>
                <button
                  className="sign-btn sign-in rf-en"
                  id="signInBtnHeader"
                  aria-label="Sign In"
                  type="button"
                  >
                    Login
                </button>
                </SignInButton>
                <button
                  className="sign-btn sign-up"
                  id="signUpBtnHeader"
                  aria-label="Try for Free"
                  type="button"
                >
                  Try for Free
                </button>
              </SignedOut>
              <SignedIn>
                <button
                  className="sign-btn sign-up"
                  id="signUpBtnHeader"
                  aria-label="Logout"
                  type="button"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              </SignedIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main className="main-wrap">
    <section className="hero" id="hero">
      <div className="hero__container container">
        <div className="hero__content">
          <h1 className="hero__content_title">AI Video Generator</h1>
          <h2 className="hero__content_subtitle">
            Turn Ideas into Videos in Minutes
          </h2>
          <p className="hero__content_desc">
            Create stunning videos with Renderforest AI Video Generator. Just
            type your idea and watch our AI generate top-quality videos for you.
            Make Videos with AI now!
          </p>
          <button
            className="rf-btn-ai pulse gradient-button"
            data-href="/project/ai-video"
            type="button"
          >
            <img
              className="ai-btn-img"
              src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/button-icon.svg"
              alt="float image"
            />
            <p>Generate AI Video</p>
          </button>
          <div className="hero__content_stars">
            <picture>
              <source
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/star-1.webp"
                width="66px"
                height="74px"
                media="(min-width:992px)"
                type="image/webp"
              />
              <img
                className="hero__content_star star-1"
                src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/star-1.png"
                alt="float image"
              />
            </picture>
            <picture>
              <source
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/star-2.webp"
                width="38px"
                height="42px"
                media="(min-width:992px)"
                type="image/webp"
              />
              <img
                className="hero__content_star star-2"
                src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/star-2.png"
                alt="float image"
              />
            </picture>
            <picture>
              <source
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/star-3.webp"
                width="36px"
                height="42px"
                media="(min-width:992px)"
                type="image/webp"
              />
              <img
                className="hero__content_star star-3"
                src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/star-3.png"
                alt="float image"
              />
            </picture>
          </div>
        </div>
      </div>
      <div className="hero__image-to-video">
        <picture>
          <source
            srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/slider-thumb-desktop-transparent.avif"
            media="(min-width:1134px)"
            type="image/avif"
          />
          <source
            srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/slider-thumb-desktop-transparent.webp"
            media="(min-width:1134px)"
            type="image/webp"
          />
          <source
            srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/slider-thumb-desktop-transparent.png"
            media="(min-width:1134px)"
            type="image/png"
          />
          <source
            srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/slider-thumb-tablet-transparent.avif"
            media="(min-width:536px)"
            type="image/avif"
          />
          <source
            srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/slider-thumb-tablet-transparent.webp"
            media="(min-width:536px)"
            type="image/webp"
          />
          <source
            srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/slider-thumb-tablet-transparent.png"
            media="(min-width:536px)"
            type="image/png"
          />
          <source
            srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/slider-thumb-mobile-transparent.avif"
            media="(min-width:320px)"
            type="image/avif"
          />
          <source
            srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/slider-thumb-mobile-transparent.webp"
            media="(min-width:320px)"
            type="image/webp"
          />
          <source
            srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/slider-thumb-mobile-transparent.png"
            media="(min-width:320px)"
            type="image/png"
          />
          <video
            autoPlay=""
            loop=""
            className="hero-video-slider image-to-video"
            src="https://videostatic.rfstat.com/landing/ai-video-desktop.mp4"
            playsInline="true"
          />
        </picture>
      </div>
      <div className="hero__video_container">
        <div className="hero__video_wrapper">
          <div className="hero__video_item">
            <picture>
              <source
                media="(min-width:666px)"
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/outube-thumbnail-new.avif"
                type="image/avif"
              />
              <source
                media="(min-width:666px)"
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/outube-thumbnail-new.webp"
                type="image/webp"
              />
              <source
                media="(min-width:666px)"
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/outube-thumbnail-new.jpg"
                type="image/jpeg"
              />
              <source
                media="(min-width:320px)"
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/youtube-thumbnail-sm.avif"
                type="image/avif"
              />
              <source
                media="(min-width:320px)"
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/youtube-thumbnail-sm.webp"
                type="image/webp"
              />
              <source
                media="(min-width:320px)"
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/youtube-thumbnail-sm.jpg"
                type="image/jpeg"
              />
              <iframe
                src="https://www.youtube.com/embed/37luZbEMAt4"
                title="iframe-video"
                allowFullScreen=""
                className="image-to-iframe hero-video"
              />
            </picture>
          </div>
          <div className="content__hero_play" style={{ display: "none" }}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 12 14"
              >
                <path
                  id="play"
                  d="M15.128,8.446,6.567,3.251a1.651,1.651,0,0,0-1.714,0A1.787,1.787,0,0,0,4,4.791V15.211a1.788,1.788,0,0,0,.847,1.556,1.651,1.651,0,0,0,1.72,0l8.562-5.21a1.824,1.824,0,0,0,0-3.111Z"
                  transform="translate(-4 -3.009)"
                  fill="#545f7e"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </section>
    <p className="hero__link">
      Already have a script? Transform your texts into videos with our{" "}
      <a href="/text-to-video-ai">Text-to-Video</a> AI tool
    </p>
    <section className="trusted">
      <div className="trusted__wrapper appear-item appear-1">
        <p className="trusted__desc">
          Trusted by <span>25M+</span> users and <span>100k+</span> high-end
          companies
        </p>
      </div>
    </section>
    <section className="power">
      <div className="power__container">
        <p className="power__title appear-item">
          AI-powered video creation{" "}
          <span className="appear-item">FAST, EASY, PROFESSIONAL</span>
        </p>
      </div>
    </section>
    <section className="create">
      <div className="create__container">
        <div
          className="create__content reverse"
          style={{ width: "100%", maxWidth: "100%", borderRadius: 0 }}
        >
          <div className="create__content_image-wrap top">
            <picture>
              <source
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/create-img-1.avif"
                width="424px"
                height="348px"
                media="(min-width:992px)"
                type="image/avif"
              />
              <source
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/create-img-1.webp"
                width="424px"
                height="348px"
                media="(min-width:992px)"
                type="image/webp"
              />
              <source
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/create-img-1-mobile.avif"
                width="344px"
                height="266px"
                media="(min-width:320px)"
                type="image/avif"
              />
              <source
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/create-img-1-mobile.webp"
                width="344px"
                height="266px"
                media="(min-width:320px)"
                type="image/webp"
              />
              <img
                className="create__content_image"
                src="https://www.renderforest.com/ai-video-generator"
                loading="lazy"
                alt="float image"
              />
            </picture>
          </div>
          <div className="create__content_wrap">
            <h3 className="create__content_title">
              Create Pro Videos, Even if You're a Newbie
            </h3>
            <p className="create__content_desc">
              No complex editing! Renderforest's AI Video Generator turns your
              ideas into stunning, personalized videos in minutes. No experience
              is needed - just type, choose your style, and let AI work magic.
            </p>
            <button
              className="rf-btn-ai transparent"
              data-href="/project/ai-video"
              type="button"
            >
              <svg
                className="ai-btn-img"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="#ffffff"
              ></svg>
              <p>Generate AI Video</p>
            </button>
          </div>
        </div>
        <div
          className="create__content"
          style={{ width: "100%", maxWidth: "100%", borderRadius: 0 }}
        >
          <div className="create__content_image-wrap bottom">
            <picture>
              <source
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/create-img-2.avif"
                width="434px"
                height="348px"
                media="(min-width:992px)"
                type="image/avif"
              />
              <source
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/create-img-2.webp"
                width="434px"
                height="348px"
                media="(min-width:992px)"
                type="image/webp"
              />
              <source
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/create-img-2-mobile.avif"
                width="344px"
                height="266px"
                media="(min-width:320px)"
                type="image/avif"
              />
              <source
                srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/create-img-2-mobile.webp"
                width="344px"
                height="266px"
                media="(min-width:320px)"
                type="image/webp"
              />
              <img
                className="create__content_image"
                src="https://www.renderforest.com/ai-video-generator"
                loading="lazy"
                alt="float image"
              />
            </picture>
          </div>
          <div className="create__content_wrap">
            <h3 className="create__content_title">
              Logo, Colors, Voice: Customize Every Detail in Your Video
            </h3>
            <p className="create__content_desc">
              Upload your logo for instant brand recognition, choose from a
              palette of colors that reflect your style, and pick a voiceover
              that fits your message. Animate, add music, and customize every
              detail for truly unique videos.
            </p>
            <button
              className="rf-btn-ai transparent"
              data-href="/project/ai-video"
              type="button"
            >
              <svg
                className="ai-btn-img"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="#ffffff"
              ></svg>
              <p>Generate AI Video</p>
            </button>
          </div>
        </div>
      </div>
    </section>
    <section className="choose" id="choose">
      <div className="choose__container container">
        <h3 className="choose__title">
          Choose Your Video <span>Animation Style</span>
        </h3>
        <p className="choose__desc">
          Browse through a diverse library of pre-designed styles, each with its
          own unique aesthetic and feel. Whether you want sleek and modern,
          playful and animated, or anything in between, there's a style to match
          your brand and message.
        </p>
      </div>
      <div className="choose__images_wrapper">
        <div
          className="choose__image top"
          style={{ backgroundPositionX: "-232.9px" }}
        />
        <div
          className="choose__image bottom"
          style={{ backgroundPositionX: "232.9px" }}
        />
        <button
          className="rf-btn-ai gradient-button"
          data-href="/project/ai-video"
          type="button"
        >
          <img
            className="ai-btn-img"
            src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/button-icon.svg"
            loading="lazy"
            alt="float image"
          />
          <p>Generate AI Video</p>
        </button>
      </div>
    </section>
    <section className="how">
      <div className="how__container container">
        <h3 className="how__title">
          How Renderforest AI Video Generator Brings Your Ideas to Life?
        </h3>
        <p className="how__desc">
          Renderforest AI Video Generator takes the hassle out of video creation
          by leveraging professional-grade, up-to-4K{" "}
          <a href="/animation-maker"> animations</a> and the power of artificial
          intelligence. Here's the magic behind it:
        </p>
        <div className="how__cards_wrapper">
          <div className="how__cards_card">
            <h4 className="how__cards_title">Tell Your Story</h4>
            <p className="how__cards_desc">
              Simply write your script or provide key points, and our AI engine
              analyzes it to understand the essence of your message.
            </p>
            <div className="how__cards_image-wrapper">
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-1.avif"
                  width="408px"
                  height="224px"
                  media="(min-width:992px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-1.webp"
                  width="408px"
                  height="224px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-1-mobile.avif"
                  width="290px"
                  height="200px"
                  media="(min-width:320px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-1-mobile.webp"
                  width="290px"
                  height="200px"
                  media="(min-width:320px)"
                  type="image/webp"
                />
                <img
                  className="how__cards_image"
                  src="https://www.renderforest.com/ai-video-generator"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-1.webp"
                  width="56px"
                  height="56px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="how__cards_image-float float-1"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-1.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-6.webp"
                  width="118px"
                  height="74px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="how__cards_image-float float-6"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-6.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
            </div>
          </div>
          <div className="how__cards_card">
            <h4 className="how__cards_title">AI Crafts Your Video</h4>
            <p className="how__cards_desc">
              Sit back and watch as the AI automatically weaves your text into a
              visually engaging video, selecting relevant animations,
              transitions, and even suggesting music and voiceovers.
            </p>
            <div className="how__cards_image-wrapper">
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-2.avif"
                  width="408px"
                  height="224px"
                  media="(min-width:992px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-2.webp"
                  width="408px"
                  height="224px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-2-mobile.avif"
                  width="290px"
                  height="200px"
                  media="(min-width:320px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-2-mobile.webp"
                  width="290px"
                  height="200px"
                  media="(min-width:320px)"
                  type="image/webp"
                />
                <img
                  className="how__cards_image"
                  src="https://www.renderforest.com/ai-video-generator"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-3.webp"
                  width="144px"
                  height="56px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="how__cards_image-float float-3"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-3.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-4.webp"
                  width="170px"
                  height="85px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="how__cards_image-float float-4"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-4.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
            </div>
          </div>
          <div className="how__cards_card">
            <h4 className="how__cards_title">Personalize the Video</h4>
            <p className="how__cards_desc">
              Customize the video to your liking by tweaking colors, fonts,
              layouts, and timing. Add your own voiceover or choose from a
              library of professional options.
            </p>
            <div className="how__cards_image-wrapper">
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-3.avif"
                  width="408px"
                  height="224px"
                  media="(min-width:992px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-3.webp"
                  width="408px"
                  height="224px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-3-mobile.avif"
                  width="290px"
                  height="200px"
                  media="(min-width:320px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-3-mobile.webp"
                  width="290px"
                  height="200px"
                  media="(min-width:320px)"
                  type="image/webp"
                />
                <img
                  className="how__cards_image"
                  src="https://www.renderforest.com/ai-video-generator"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-5.webp"
                  width="153px"
                  height="75px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="how__cards_image-float float-5"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-5.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-2.webp"
                  width="80px"
                  height="91px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="how__cards_image-float float-2"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-2.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
            </div>
          </div>
          <div className="how__cards_card">
            <h4 className="how__cards_title">Render &amp; Share</h4>
            <p className="how__cards_desc">
              Once you're happy with your masterpiece, render it in minutes and
              share it with the world! Impress your audience on social media,
              your website, or anywhere you need to captivate your audience.
            </p>
            <div className="how__cards_image-wrapper">
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-4.avif"
                  width="408px"
                  height="224px"
                  media="(min-width:992px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-4.webp"
                  width="408px"
                  height="224px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-4-mobile.avif"
                  width="290px"
                  height="200px"
                  media="(min-width:320px)"
                  type="image/avif"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-img-4-mobile.webp"
                  width="290px"
                  height="200px"
                  media="(min-width:320px)"
                  type="image/webp"
                />
                <img
                  className="how__cards_image"
                  src="https://www.renderforest.com/ai-video-generator"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-7.webp"
                  width="150px"
                  height="75px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="how__cards_image-float float-7 appear-item"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-7.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-8.webp"
                  width="72px"
                  height="54px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="how__cards_image-float float-8 appear-item"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/how-float-8.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
            </div>
          </div>
        </div>
        <button
          className="rf-btn-ai transparent"
          data-href="/project/ai-video"
          type="button"
        >
          <svg
            className="ai-btn-img"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="#ffffff"
          ></svg>
          <p>Generate AI Video</p>
        </button>
      </div>
    </section>
    <section className="ways">
      <div className="ways__container container">
        <h3 className="ways__title">
          More Ways to Customize <span>Your Video</span>
        </h3>
        <div className="ways__cards">
          <div className="ways__cards_card">
            <div className="ways__cards_img">
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-img-2.webp"
                  width="320px"
                  height="164px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-img-2-sm.webp"
                  width="320xp"
                  height="164px"
                  media="(min-width:320px)"
                  type="image/webp"
                />
                <img
                  className="ways__cards_image"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-img-2-sm.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-float-2.webp"
                  width="132xpx"
                  height="112px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="ways__cards_image-float float-1"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-float-2.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-cursor.webp"
                  width="46xpx"
                  height="46px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="ways__cards_image-float cursor-1"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-cursor.png"
                  loading="lazy"
                  alt="cursor image"
                />
              </picture>
            </div>
            <h4 className="ways__cards_title">Choose the Tone</h4>
            <p className="ways__cards_desc">
              Formal, Friendly, or Casual. Select the tone you want, or let AI
              pick a tone that fits your needs.
            </p>
          </div>
          <div className="ways__cards_card">
            <div className="ways__cards_img">
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-img-1.webp"
                  width="320px"
                  height="164px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-img-1-sm.webp"
                  width="320xp"
                  height="164px"
                  media="(min-width:320px)"
                  type="image/webp"
                />
                <img
                  className="ways__cards_image"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-img-1-sm.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-float-1.webp"
                  width="240px"
                  height="68px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="ways__cards_image-float float-2"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-float-1.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-cursor.webp"
                  width="46xpx"
                  height="46px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="ways__cards_image-float cursor-2"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-cursor.png"
                  loading="lazy"
                  alt="cursor image"
                />
              </picture>
            </div>
            <h4 className="ways__cards_title">Choose the Speaker</h4>
            <p className="ways__cards_desc">
              Select the speaker who talks to your audience the best.
            </p>
          </div>
          <div className="ways__cards_card">
            <div className="ways__cards_img">
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-img-3.webp"
                  width="320px"
                  height="164px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-img-3-sm.webp"
                  width="320xp"
                  height="164px"
                  media="(min-width:320px)"
                  type="image/webp"
                />
                <img
                  className="ways__cards_image"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-img-3-sm.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-float-3.webp"
                  width="140px"
                  height="108px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="ways__cards_image-float float-3"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-float-3.png"
                  loading="lazy"
                  alt="float image"
                />
              </picture>
              <picture>
                <source
                  srcSet="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-cursor.webp"
                  width="46xpx"
                  height="46px"
                  media="(min-width:992px)"
                  type="image/webp"
                />
                <img
                  className="ways__cards_image-float cursor-3"
                  src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/ways-cursor.png"
                  loading="lazy"
                  alt="cursor image"
                />
              </picture>
            </div>
            <h4 className="ways__cards_title">Select the Style</h4>
            <p className="ways__cards_desc">
              You have the choice to pick the style you need, be it 2D or 3D.
              Or, you can simply pick AI to pick a style for you.
            </p>
          </div>
        </div>
        <button
          className="rf-btn-ai gradient-button"
          data-href="/project/ai-video"
          type="button"
        >
          <img
            className="ai-btn-img"
            src="https://static.rfstat.com/renderforest/images/v2/landing-pics/ai-video-generator/button-icon.svg"
            loading="lazy"
            alt="float image"
          />
          <p>Generate AI Video</p>
        </button>
      </div>
    </section>
    <div
      className="rf-scrollTop-btn"
      role="button"
      aria-label="Scroll up"
      style={{ bottom: 23 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={22}
        height={12}
        viewBox="0 0 19 12"
      >
        <defs></defs>
        <use
          fill="#387DFF"
          fillRule="evenodd"
          transform="matrix(0 1 1 0 3.61 -3.61)"
          xlinkHref="#arrow_top-a"
        />
      </svg>
    </div>
  </main>
  {/* created a root element for promo and offer badges layout*/}
  <div id="badgeRoot" dir="ltr" style={{ bottom: 24 }}>
    <div id="offerRoot" />
  </div>
  <div className="rf-en" id="cookie_message" style={{ display: "none" }}>
    <img
      className="cookie-icon"
      src="https://static.rfstat.com/renderforest/images/v2/icons/cookie_img.webp"
      data-src="https://static.rfstat.com/renderforest/images/v2/icons/cookie_img"
      width={80}
      height={76}
      alt="Cookie icon"
    />
    <p className="cookie-msg">
      We use cookies to improve your experience. By clicking agree, you allow us
      such use.
    </p>
    <button className="rf-btn blue">AGREE</button>
  </div>
  {/* Google Tag Manager (noscript)*/}
  <noscript>
    &lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T435FFR"
    height="0" width="0"
    style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;
  </noscript>
  {/* End Google Tag Manager (noscript)*/}
  {/* Google Tag Manager*/}
  {/* End Google Tag Manager*/}
  <div id="lang_message" style={{ display: "none", top: 84 }}>
    <p className="lang-msg" id="lang_message_text" />
    <div className="rf-lang_btns">
      <button className="rf-btn blue" id="lang_message_success" />
      <button className="cancel_btn" id="lang_message_cancel" />
    </div>
  </div>
</>

  )
}

export default Home