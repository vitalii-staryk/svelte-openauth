<script lang="ts">
  import DemoPreview from '$lib/images/demo-preview.webp';
  import Goals from '$lib/images/goals.webp';
  import MobileImage from '$lib/images/mobile.webp';
  import Widgets from '$lib/images/widgets.webp';
  import DocumentationIcon from "$lib/icons/DocumentationIcon.svelte";
  import AppStoreIcon from "$lib/icons/AppStoreIcon.svelte";
  import GooglePlayIcon from "$lib/icons/GooglePlayIcon.svelte";
  import '$lib/styles/index.css';
  import {authClient, redirectUri} from "../api/auth/auth";

  async function login() {
    const { challenge, url } = await authClient.authorize(
      redirectUri,
      "code",
      { pkce: true }
    );
    sessionStorage.setItem("pkce_challenge", JSON.stringify(challenge));
    window.location.href = url;
  }
</script>

<div class="page">
  <div class="content">
    <!-- OVERVIEW -->
    <div class="section overview-section">
      <div class="title">One Dollar Stats</div>
      <div class="subtitile">
        $1<span class="small-price">.00</span><span class="subtitile-month">/month</span> web analytics
        🚀
      </div>
      <div
        role="presentation"
        class="sign-in-button"
        on:click={login}
      >
        Sign in
      </div>
      <a class="documentation-link" href='/' target="_blank">
        <DocumentationIcon width={24} height={24} />
        <span> How it works </span>
      </a>
    </div>
    <!-- INTERACTIVE DEMO -->
    <div class="section interactive-demo-section">
      <div class="section-title">Interactive Demo</div>
      <div class="section-description">
        Check out our interactive live demo of Drizzle ORM website
      </div>
      <div class="demo-preview-wrap">
        <img class="demo-preview" src={DemoPreview} alt="Demo Preview" />
        <a href="/demo" class="demo-preview-button">Live Demo</a>
      </div>
    </div>
    <!-- MOBILE APP -->
    <div class="section mobile-app-section">
      <div class="horizontal-section">
        <div class="section-text">
          <div class="section-title">iOS & Android mobile apps</div>
          <div class="section-description">
            Brew some coffee, chill, browse your stats on your phone
          </div>
          <div class="download-buttons">
            <a
              target="_blank"
              class="button"
              href="https://apps.apple.com/us/app/lil-stats/id6738584022"
              rel="noopener noreferrer"
            >
              <AppStoreIcon width={'100%'} />
            </a>
            <button class="button">
              <GooglePlayIcon width={'100%'} />
            </button>
          </div>
        </div>
        <div class="mobile-img-wrap">
          <img class="mobile-img" src={MobileImage} alt="Mobile App" />
        </div>
      </div>
    </div>
    <!-- WIDGETS -->
    <div class="section widgets-section">
      <div class="widgets-text">
        <div class="section-title">Widgets</div>
        <div class="section-description">
          Custom dashboard where you can extract important metrics into dedicated graphs
        </div>
      </div>
      <div class="widgets-image-wrap">
        <img src={Widgets} class="widgets" alt="Widgets" />
      </div>
    </div>
    <!-- GOALS -->
    <div class="section">
      <div class="goals-text">
        <div class="section-title">Goals</div>
        <div class="section-description">
          Measure your conversions for web page visits or custom events
        </div>
      </div>
      <img class="goals" src={Goals} alt="Goals" />
    </div>
  </div>
</div>

<style lang="scss">
  .documentation-link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;

    margin: 8px auto 0;
    padding: 8px;
    width: fit-content;
    border-radius: 4px 8px;

    transition: background-color 0.2s ease-in-out;
    color: #909090;

    &:hover {
      background: #f6f6f7;
    }

    & span {
      font-size: 12px;
      color: #000000;
    }
  }
  .page {
    width: fit-content;
    margin: 0 auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    padding: 160px 0 120px;
    gap: 24px;
    max-width: 1024px;
    margin: 0 24px;
  }

  .loader-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }

  .section {
    text-align: center;
    padding: 48px;
    border: 1px solid #e0e1e2;
    border-radius: 8px;
    width: 100%;
    background-color: #fbfbfb;
  }

  /* COMMON */

  .section-title {
    font-size: 30px;
    font-weight: 700;
  }

  .section-description {
    color: rgb(107, 114, 128);
    font-size: 18px;
    margin-top: 8px;
  }

  /* OVERVIEW */

  .overview-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 48px;
    border: none;
    background-color: #fff;
  }

  .built-by-drizzle-team {
    position: relative;
    z-index: 11;
    width: fit-content;
    margin: 16px auto 0;
  }

  .dashboard-button {
    margin-top: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #151924;
    color: #fff;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.2s;
    cursor: pointer;
    padding: 16px 32px;
  }

  .small-price {
    font-weight: 500;
    font-size: 20px;
  }

  .sign-in-button {
    margin-top: 56px;
    display: flex;
    align-items: center;
    background: #151924;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    gap: 8px;
    padding: 12px 24px;
    flex-shrink: 0;

    .icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .title {
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 16px;
    color: #606060;
  }

  .subtitile {
    font-size: 30px;
    text-align: center;
    font-weight: 600;
    color: #21272e;
  }

  .subtitile-month {
    color: rgb(96, 96, 96);
    font-weight: 500;
    font-size: 20px;
  }

  .section-text {
    padding: 48px 0 48px 48px;
    display: flex;
    flex-direction: column;
    text-align: left;
    flex: 1;
  }

  /* MOBILE APP */

  .horizontal-section {
    display: flex;
    flex-direction: row;
    gap: 48px;
    overflow: hidden;
  }

  .mobile-app-section {
    padding: 0;
  }

  .mobile-img-wrap {
    margin-left: -48px;
    padding: 48px 48px 0 140px;
    flex: 1;
    aspect-ratio: 1;
    overflow: hidden;
  }

  .mobile-img {
    width: 100%;
    filter: drop-shadow(0px 7px 29px rgba(100, 100, 111, 0.2));
  }

  /* INTERACTIVE DEMO */

  .interactive-demo-section {
    padding-bottom: 0;
    overflow: hidden;
  }

  .demo-preview-wrap:has(.demo-preview-button:hover) .demo-preview {
    filter: none;
  }

  .demo-preview-wrap {
    position: relative;
  }

  .demo-preview {
    margin-top: 32px;
    width: 100%;
    border-radius: 8px;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #e8e8e8;
    margin-bottom: -80px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    filter: blur(2px);
    transition: filter 0.2s;
  }

  .demo-preview-button {
    z-index: 999;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #151924;
    color: #fff;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    transition: background-color 0.2s;
    cursor: pointer;
    padding: 16px 32px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .download-buttons {
    display: flex;
    margin-top: 24px;
    gap: 12px;
  }

  .button {
    display: flex;
    flex: 1;
  }

  /* WIDGETS */

  .widgets-section {
    display: flex;
    flex-direction: row;
    gap: 48px;
  }

  .widgets-text {
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: left;
  }

  .widgets-image-wrap {
    flex: 1;
  }

  .widgets {
    width: 100%;
    border-radius: 8px;
    background-color: #fff;
    padding: 10px;
    border: 1px solid #e8e8e8;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  /* GOALS */

  .goals-text {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .goals {
    width: 100%;
    margin-top: 24px;
    border-radius: 8px;
    background-color: #fff;
    padding: 4px;
    border: 1px solid #e8e8e8;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  .stats-container {
    display: grid;
    grid-template-columns: 180px 180px 180px;
    justify-content: center;

    .stats-item:first-child {
      border-right: 1px solid #e0e1e2;
    }

    .stats-item:last-child {
      border-left: 1px solid #e0e1e2;
    }

    .stats-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;

      .stats-item-value {
        font-weight: 600;
        font-size: 26px;
        margin-bottom: 4px;
        height: 30px;
      }

      .stats-item-text {
        color: #6b7280;
        font-size: 12px;
        font-weight: 400;
        text-transform: uppercase;
      }
    }
  }

  /* MEDIA QUERIES */

  @media (max-width: 700px) {
    .content {
      margin: 0;
    }

    .section {
      border-radius: 0;
      border-left: none;
      border-right: none;
      padding: 24px;
    }

    .overview-section {
      padding-bottom: 120px;
    }

    .mobile-app-section {
      padding: 0;
    }

    .section-text {
      padding: 24px 0 24px 24px;
    }

    .mobile-img-wrap {
      padding: 24px 24px 0 48px;
    }

    .section-description {
      margin-top: 8px;
    }

    .widgets-section {
      gap: 24px;
    }

    .widgets-text {
      gap: 24px;
    }

    .section-title {
      font-size: 24px;
    }

    .section-description {
      font-size: 16px;
    }

    .title {
      font-size: 14px;
    }

    .subtitile {
      font-size: 24px;
    }

    .stats-container {
      grid-template-columns: 130px 120px 130px;
      .stats-item {
        .stats-item-value {
          height: 23px;
          margin-bottom: 6px;
          font-size: 20px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .subtitile,
    .title {
      margin-bottom: 32px;
    }

    .section {
      padding: 16px;
    }

    .overview-section {
      padding-bottom: 120px;
    }

    .section-text {
      padding: 16px 16px 0 16px;
    }

    .download-buttons {
      gap: 16px;
      margin-top: 16px;
    }

    .mobile-app-section {
      padding: 0;
    }

    .horizontal-section {
      flex-direction: column;
      gap: 24px;
    }

    .mobile-img-wrap {
      padding: 48px 48px 0 48px;
      margin-left: 0;
      margin-top: -32px;
    }

    .widgets-section {
      flex-direction: column;
      gap: 16px;
    }

    .widgets-text {
      gap: 16px;
    }

    .goals {
      margin-top: 16px;
    }
  }
</style>
