<template>
  <div class="absoluteHoangVanHoa" id="topPage">
    <header class="headerHoangVanHoa">
      <div class="containerHoangVanHoa headerStyleHoangVanHoa">
        <div class="logoWebsiteHoangVanHoa">
          <nuxt-link to="/" title="Logo Hoang Van Hoa Profile">
            <h1 class="overflowHiddenHoangVanHoa width0 height0">Hoang Van Hoa Profile</h1>
            <img
              src="@/assets/image/logo/Hoang-Hoa-Profile-Official-Logo.png"
              alt="logo-small-hoang-hoa-profile-official-home-page"
              class="logo-small-hoang-hoa-profile-official-home-page"
            />
          </nuxt-link>
        </div>

        <div>
          <ul class="headerNavHoangVanHoa">
            <li class="navLinkHoangVanHoa">
              <nuxt-link to="/" class="textNavHeader uppercaseHoangVanHoa">Home</nuxt-link>
            </li>
            <li class="navLinkHoangVanHoa">
              <nuxt-link to="/sources" class="textNavHeader uppercaseHoangVanHoa" href>Sources</nuxt-link>
            </li>
            <li class="navLinkHoangVanHoa">
              <nuxt-link to="/contact-me" class="textNavHeader uppercaseHoangVanHoa" href>Contact me</nuxt-link>
            </li>
            <li class="navLinkHoangVanHoa">
              <nuxt-link to="/blog" class="textNavHeader uppercaseHoangVanHoa" href>Blog</nuxt-link>
            </li>
            <li class="navLinkHoangVanHoa">
              <nuxt-link to="/vlog" class="textNavHeader uppercaseHoangVanHoa" href>Vlog</nuxt-link>
            </li>
          </ul>
        </div>

        <div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="block absoluteHoangVanHoa text-gray-600 z-10 h-4 mt-3 ml-3 fill-current"
              style="height: 16px;z-index: 20;margin: 12px 0 0 12px;"
            >
              <path
                d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
              />
            </svg>
            <span
              class="algolia-autocomplete"
              style="position: relative; display: inline-block; direction: ltr;"
            >
              <input
                id="algolia"
                name="search"
                placeholder="Search (Updating..)"
                class="nui-search-input ds-input"
                type="text"
                autocomplete="off"
                spellcheck="false"
                role="combobox"
                aria-autocomplete="list"
                aria-expanded="false"
                aria-label="search input"
                aria-owns="algolia-autocomplete-listbox-0"
                dir="auto"
                style="position: relative; vertical-align: top; border: 0 solid #e2e8f0;"
              />
              <pre
                aria-hidden="true"
                style="position: absolute; visibility: hidden; white-space: pre; font-family: Quicksand, -apple-system, BlinkMacSystemFont, &quot;Segoe UI&quot;, Roboto, &quot;Helvetica Neue&quot;, Arial, &quot;Noto Sans&quot;, sans-serif, &quot;Apple Color Emoji&quot;, &quot;Segoe UI Emoji&quot;, &quot;Segoe UI Symbol&quot;, &quot;Noto Color Emoji&quot;; font-size: 16px; font-style: normal; font-variant: normal; font-weight: 500; word-spacing: 0px; letter-spacing: normal; text-indent: 0px; text-rendering: auto; text-transform: none;"
              ></pre>
              <span
                class="ds-dropdown-menu"
                role="listbox"
                id="algolia-autocomplete-listbox-0"
                style="position: absolute; top: 100%; z-index: 100; display: none; left: 0px; right: auto;"
              >
                <div class="ds-dataset-1"></div>
              </span>
            </span>
          </div>
        </div>
      </div>
    </header>

    <div class="scrollTopPage" @click="scrollElement('topPage')">
      <a ></a>
    </div>

  </div>
</template>

<script>
export default {
  mounted() {
    //this.facebook();
  },
  created() {},
  methods: {
    scrollElement(el) {
      let dataT = document.getElementById(el)
      dataT.scrollIntoView();
      // if (data) {
      //   $([document.documentElement, document.body]).animate(
      //     {
      //       scrollTop: $("#" + el).offset().top
      //     },
      //     1500
      //   )
      // }
    }
  }
};
</script>

<style>
.logo-small-hoang-hoa-profile-official-home-page {
  height: auto;
  margin-top: -10px;
  width: 132px;
}
.uppercaseHoangVanHoa {
  text-transform: uppercase;
}
.absoluteHoangVanHoa {
  position: absolute;
}
.overflowHiddenHoangVanHoa {
  overflow: hidden;
}
.width0 {
  width: 0px;
}
.height0 {
  height: 0px;
}
.headerHoangVanHoa {
  position: fixed;
  background-color: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 30;
}
.scrollTopPage {
  position: fixed;
  background-color: #fff;
  bottom: 0;
  right: 10px;
  z-index: 30;
}
.headerStyleHoangVanHoa {
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding: 12px 28px;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0px -8px 20px -8px rgba(0, 0, 0, 0.3);
}
.headerNavHoangVanHoa {
  display: flex;
  list-style: none;
  text-align: center;
  padding: 0;
}
.containerHoangVanHoa {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}
.logoWebsiteHoangVanHoa {
  width: 52px;
  height: 52px;
  padding-right: 180px;
}
.navLinkHoangVanHoa {
  padding: 0 16px;
}
.textNavHeader {
  padding: 8px;
  text-decoration: none;
  color: #2f495e;
}
.textNavHeader:hover {
  color: #00c58e;
}

.nui-search-input {
  position: relative;
  vertical-align: top;
  background-color: #edf2f7;
  color: #2f495e;
  font-weight: 500;
  padding-right: 1rem;
  padding-left: 2.5rem;
  border-radius: 9999px;
  height: 2.5rem;
  outline: 0;
  width: 100%;
}
button,
input,
optgroup,
select,
textarea {
  padding: 0;
  line-height: inherit;
  color: inherit;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}
input {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textfield;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 0px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}
.text-gray-600 {
  color: #718096;
}
.fill-current {
  fill: currentColor;
}
</style>