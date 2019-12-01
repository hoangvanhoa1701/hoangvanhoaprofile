<template>
  <div>
    <div class="Welcome-container">
      <div>
        <!-- <logo/> -->
        <div class="Welcome-container-logo">
          <div class="Welcome-container-logo-width">
            <svg class="Welcome-container-logo-width__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
              <path
                d="M39.84,31.44a2.85,2.85,0,0,0-1,.2,4.75,4.75,0,0,0-9.39,0,2.86,2.86,0,1,0-1,5.53H39.84a2.86,2.86,0,0,0,0-5.73Z"
                class="cls-2"
              />
              <path
                d="M81.35,38.35a2.84,2.84,0,0,0-1,.2,4.75,4.75,0,0,0-9.39,0,2.86,2.86,0,1,0-1,5.53H81.35a2.86,2.86,0,0,0,0-5.73Z"
                class="cls-2 cls-2-right"
              />
              <path d="M46.22,63.4,58.86,46.11a1.19,1.19,0,0,1,1.93,0L73.42,63.4Z" class="cls-3" />
              <path d="M46.22,63.4,58.86,46.11a1.19,1.19,0,0,1,1.93,0L73.42,63.4Z" class="cls-4" />
              <path d="M39.42,63.4,50.68,50.16a1.19,1.19,0,0,1,1.82,0L63.76,63.4Z" class="cls-3" />
              <path d="M39.43,63.4,50.68,50.16a1.19,1.19,0,0,1,1.82,0L63.76,63.4Z" class="cls-4" />
              <line x1="30.24" y1="63.4" x2="30.24" y2="57.68" class="cls-4" />
              <polygon
                points="35.97 53.38 31.67 48.37 34.53 48.37 30.24 43.36 25.95 48.37 28.81 48.37 24.52 53.38 28.09 53.38 24.52 57.68 30.24 57.68 35.97 57.68 32.39 53.38 35.97 53.38"
                class="cls-5"
              />
              <path
                d="M25.71,63.4a1.1,1.1,0,0,0-1.1,1.18,25,25,0,0,0,49.9,0,1.1,1.1,0,0,0-1.1-1.18Z"
                class="cls-6"
              />
              <path
                d="M25.71,63.4a1.1,1.1,0,0,0-1.1,1.18,25,25,0,0,0,49.9,0,1.1,1.1,0,0,0-1.1-1.18Z"
                class="cls-4"
              />
              <path
                d="M35.25,63.4a2.86,2.86,0,1,0,0,5.73,2.92,2.92,0,0,1,2.79,2l2.4,7.67a2.47,2.47,0,0,0,4.84-.74v-2a8.17,8.17,0,0,1,2.39-5.78A4,4,0,0,0,44.8,63.4Z"
                class="cls-7"
              />
              <path
                d="M68.89,78.58V73.92a4.08,4.08,0,0,0-4.08-4.08,3.08,3.08,0,0,0-3.08,3.08,3.08,3.08,0,0,1-2.61,3l-.76.12A7.89,7.89,0,0,0,51.73,83l-.55,4.69A24.92,24.92,0,0,0,68.89,78.58Z"
                class="cls-3"
              />
              <path
                d="M68.89,78.58V73.92a4.08,4.08,0,0,0-4.08-4.08,3.08,3.08,0,0,0-3.08,3.08,3.08,3.08,0,0,1-2.61,3l-.76.12A7.89,7.89,0,0,0,51.73,83l-.55,4.69A24.92,24.92,0,0,0,68.89,78.58Z"
                class="cls-4"
              />
              <line x1="43.12" y1="63.4" x2="43.12" y2="59.11" class="cls-4" />
              <polygon
                points="48.85 54.81 44.55 49.8 47.42 49.8 43.12 44.8 38.83 49.8 41.69 49.8 37.4 54.81 40.98 54.81 37.4 59.11 43.12 59.11 48.85 59.11 45.27 54.81 48.85 54.81"
                class="cls-5"
              />
            </svg>
          </div>
        </div>

        <h1 class="Welcome-container__title">{{title}}</h1>

        <h2 class="Welcome-container__subtitle" v-for="item in subtitle" :key="item.index">
          {{item}}
        </h2>

        <div class="Welcome-container-links">
          <a href="#CVMe" class="button--green h-transitionAll">My CV</a>

          <a href="#AboutMe" class="button--green h-transitionAll">About Me</a>

          <!-- <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            My GitHub
          </a>

          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            My GitLab
          </a>-->

          <a
            href="https://youtube.com/vlogbachoa"
            target="_blank"
            class="button--grey h-transitionAll"
          >My Youtube Channel</a>

          <a
            href="https://facebook.com/vlogbachoa"
            target="_blank"
            class="button--grey h-transitionAll"
          >My Facebook</a>
        </div>
      </div>
    </div>

    <div class="h-container" id="CVMe">
      <div class="ContentCV h-row">
        <div class="ContentCV-left h-col-8 h-col-s-12">
          <div class="ContentCV-left-main">
            <div class="ContentCV-left-main-name">Hoàng Văn Hoà</div>

            <div class="ContentCV-left-main-work">Frontend Web Developer</div>

            <div class="ContentCV-left-main-about">
              <div>
                My nickname is Nova, i want to become a Professional Web Developer.
                I’m interested in IT because I can demonstrate my skills in Teamwork, soft
                skills I am excellent at and I can contribute these strength to projects.
              </div>

              <ul class="ContentCV-left-main-about-listTernPlans">
                <li>Short term goal: I want to become a Junior Full Tack Web Developer.</li>
                <li>Long term goal: I want to become a Senior Web Developer.</li>
              </ul>
            </div>
          </div>

          <div class="ContentCV-left-sup">
            <div class="ContentCV-left-sup-typeInformation">
              <div class="typeInformationTitle">
                <div class="imageIconTitle">
                  <!-- <img class="imageIconTitleStyle" src="~assets/images/icon-address.png" alt=""> -->
                </div>
                <div class="nameTitle">STUDY</div>
              </div>
              
              <div class="alinetypeInformationTitle"></div>

              <div class="typeInformationContent">
                <div class="typeInformationContentTitle">
                  <div class="typeInformationContentTitleName">Information Technology High Quality</div>
                  <div class="typeInformationContentTitleTime">08/2017 - Present</div>
                </div>
                <div class="typeInformationContentFull">
                  <p
                    class="typeInformationContentMain"
                  >International College Ho Chi Minh City - University of Science</p>
                  <ul class="typeInformationContentSup"></ul>
                </div>
              </div>

              <div class="typeInformationContent">
                <div class="typeInformationContentTitle">
                  <div
                    class="typeInformationContentTitleName"
                  >The Complete Python Basics Programming Course</div>
                  <div class="typeInformationContentTitleTime">03/2019 - 05/2019</div>
                </div>
                <div class="typeInformationContentFull">University of Science Ho Chi Minh</div>
              </div>
            </div>

            <div class="ContentCV-left-sup-typeInformation">
              <div class="typeInformationTitle">
                <div class="imageIconTitle">
                  <!-- <img class="imageIconTitleStyle" src="~assets/images/icon-address.png" alt=""> -->
                </div>
                <div class="nameTitle">EXPERIENCE</div>
              </div>
              <div class="alinetypeInformationTitle"></div>

              <div class="typeInformationContent">
                <div class="typeInformationContentTitle">
                  <div class="typeInformationContentTitleName">Project Program Windows (C#)</div>
                  <div class="typeInformationContentTitleTime">03/2019 - 04/2019</div>
                </div>
                <div class="typeInformationContentFull">
                  <p class="typeInformationContentMain">International College Ho Chi Minh City</p>
                  <ul class="typeInformationContentSup">
                    <li>Build project program Windows (C#) my classmates</li>
                  </ul>
                </div>
              </div>

              <div class="typeInformationContent">
                <div class="typeInformationContentTitle">
                  <div class="typeInformationContentTitleName">Project Laravel Framework</div>
                  <div class="typeInformationContentTitleTime">06/2019 - 07/2019</div>
                </div>
                <div class="typeInformationContentFull">
                  <p class="typeInformationContentMain">International College Ho Chi Minh City</p>
                  <ul class="typeInformationContentSup">
                    <li>I have researched, implemented and used the project alone.</li>
                  </ul>
                </div>
              </div>

              <div class="typeInformationContent">
                <div class="typeInformationContentTitle">
                  <div
                    class="typeInformationContentTitleName"
                  >Project Mitsubishi Electric Website Viet Nam</div>
                  <div class="typeInformationContentTitleTime">09/2019 - 10/2019</div>
                </div>
                <div class="typeInformationContentFull">
                  <p class="typeInformationContentMain">Yoong Solution Company</p>
                  <ul class="typeInformationContentSup">
                    <li>
                      Took part in project and build front end for website to Vue JS (Nuxt JS)
                      <div>http://mevn-staging.storm12.com/</div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="typeInformationContent">
                <div class="typeInformationContentTitle">
                  <div class="typeInformationContentTitleName">Build My Hoang Hoa Profile Website</div>
                  <div class="typeInformationContentTitleTime">11/2019 - Present</div>
                </div>
                <div class="typeInformationContentFull">
                  <p class="typeInformationContentMain">At my home</p>
                  <ul class="typeInformationContentSup">
                    <li>
                      Build front end for website to Vue JS (Nuxt JS). You can see it below:
                      <div>https://hoangvanhoa-profile.herokuapp.com/</div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="ContentCV-left-sup-typeInformation">
              <div class="typeInformationTitle">
                <div class="imageIconTitle">
                  <!-- <img class="imageIconTitleStyle" src="~assets/images/icon-address.png" alt=""> -->
                </div>
                <div class="nameTitle">ACTIVITY</div>
              </div>
              <div class="alinetypeInformationTitle"></div>

              <div class="typeInformationContent">
                <div class="typeInformationContentTitle">
                  <div
                    class="typeInformationContentTitleName"
                  >Blood Donation, Green Summer/ Spring Volunteer Campaign.</div>
                  <div class="typeInformationContentTitleTime">
                    <!-- 07/2018 - 09/2018 -->
                  </div>
                </div>
                <div class="typeInformationContentFull">
                  <p class="typeInformationContentMain"></p>
                  <ul class="typeInformationContentSup">
                    <li>
                      Last years, I participated in a Green Summer Volunteer Campaign at my
                      university. And it taught me a lot of experience, skill and teamwork skill.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="typeInformationContent">
                <div class="typeInformationContentTitle">
                  <div
                    class="typeInformationContentTitleName"
                  >Created Content Youtube, Vlog And Short Film.</div>
                  <div class="typeInformationContentTitleTime">
                    <!-- 06/2019 - Present -->
                  </div>
                </div>
                <div class="typeInformationContentFull">
                  <p class="typeInformationContentMain"></p>
                  <ul class="typeInformationContentSup">
                    <li>
                      I'm Youtuber, and i participated in creating content on youtube.
                      I also took part in team Moko Production.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="ContentCV-left-sup-typeInformation">
              <div class="typeInformationTitle">
                <div class="imageIconTitle">
                  <!-- <img class="imageIconTitleStyle" src="~assets/images/icon-address.png" alt=""> -->
                </div>
                <div class="nameTitle">INFORMATION MORE</div>
              </div>
              <div class="alinetypeInformationTitle"></div>

              <div class="typeInformationContent">
                <div class="typeInformationContentTitle">
                  <div class="typeInformationContentTitleName"></div>
                  <div class="typeInformationContentTitleTime"></div>
                </div>
                <div class="typeInformationContentFull">
                  <p class="typeInformationContentMain"></p>
                  <ul class="typeInformationContentSup">
                    <li>I'm a friendly and kind person.</li>
                    <li>I have many good soft skills and good teamwork skills.</li>
                    <li>
                      I’ve always been a great team player. I’m good at keeping a team together
                      and producing quality work in a team environment.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="ContentCV-right h-col-4 h-col-s-12">
          <!-- <div class="imageAvatarMain">
            <svg width="197" height="160" xmlns="http://www.w3.org/2000/svg" class="inline-block"><g fill="none" fill-rule="evenodd"><path d="M189.674523 89.7867565c-.003434-36.6675407-22.302993-69.6486929-56.32978-83.31201107C99.3179548-7.18857274 60.4018603 1.21168314 35.0407757 27.6942045 9.67969115 54.1767259 2.97010499 93.4196636 18.0920314 126.823793H181.683502c5.277806-11.63343 8.002598-24.262382 7.991021-37.0370365z" fill="#E2E8F0"></path> <path d="M11.2233446 126.801347H186.30752M1.12233446 126.801347h5.61167227M190.796857 126.801347h5.611673" stroke="#2F495E" stroke-linecap="round" stroke-linejoin="round"></path> <g transform="translate(18.765432 7.542088)"><ellipse fill="#E2E8F0" cx="24.1077441" cy="148.552189" rx="11.2233446" ry="3.36700337"></ellipse> <path d="M18.8776655 86.7340067c-.765013.7512771-1.1959666 1.7785065-1.1959666 2.8507296 0 1.072223.4309536 2.0994524 1.1959666 2.8507295l2.3569024 2.379349c1.5695374 1.5764314 1.5695374 4.1250276 0 5.7014592l-2.3569024 2.379349c-.765013.751277-1.1959666 1.778506-1.1959666 2.850729s.4309536 2.099453 1.1959666 2.85073M29.0909091 86.7340067c-1.5695375 1.5764315-1.5695375 4.1250276 0 5.7014591l2.3569023 2.379349c.7650131.7512771 1.1959667 1.7785065 1.1959667 2.8507295 0 1.0722231-.4309536 2.0994525-1.1959667 2.8507297l-2.3569023 2.379349c-1.5695375 1.576431-1.5695375 4.125028 0 5.701459" stroke="#2F495E" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M11.2682379 142.154882c-3.84932629 0-7.40625057-2.053591-9.33091378-5.387205-1.92466322-3.333614-1.92466322-7.440797 0-10.774411 1.92466321-3.333614 5.48158749-5.387206 9.33091378-5.387205v5.387205c-2.97527134 0-5.38720535 2.411934-5.38720535 5.387205 0 2.975272 2.41193401 5.387206 5.38720535 5.387206v5.387205z" stroke="#2F495E" fill="#00C58E" stroke-linejoin="round"></path> <rect stroke="#2F495E" fill="#FFF" stroke-linejoin="round" x="11.2682379" y="113.872054" width="26.5993266" height="33.6700337" rx="1.2"></rect> <path d="M58.6756453 37.3512907v-5.6116723c0-12.3969641 10.0497251-22.44668911 22.4466892-22.44668911 12.396964 0 22.4466895 10.04972501 22.4466895 22.44668911v5.6116723c2.479392 0 4.489337 2.009945 4.489337 4.4893378 0 2.4793928-2.009945 4.4893378-4.489337 4.4893378h-.269361c-1.708014 10.9257067-11.118921 18.979711-22.1773285 18.979711-11.0584076 0-20.469315-8.0540043-22.1773289-18.979711h-.2693603c-2.4793928 0-4.4893378-2.009945-4.4893378-4.4893378 0-2.4793928 2.009945-4.4893378 4.4893378-4.4893378z" stroke="#4550E5" fill="#FFF" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M58.6756453 37.3512907v-5.6116723c0-12.3969641 10.0497251-22.44668911 22.4466892-22.44668911 12.396964 0 22.4466895 10.04972501 22.4466895 22.44668911v5.6116723c2.479392 0 4.489337 2.009945 4.489337 4.4893378 0 2.4793928-2.009945 4.4893378-4.489337 4.4893378h-.269361c-1.708014 10.9257067-11.118921 18.979711-22.1773285 18.979711-11.0584076 0-20.469315-8.0540043-22.1773289-18.979711h-.2693603c-2.4793928 0-4.4893378-2.009945-4.4893378-4.4893378 0-2.4793928 2.009945-4.4893378 4.4893378-4.4893378z" stroke="#2F495E" stroke-linecap="round" stroke-linejoin="round"></path> <circle fill="#DAE1E9" cx="94.0291807" cy="46.8686869" r="2.80583614"></circle> <circle fill="#DAE1E9" cx="68.2154882" cy="46.8686869" r="2.80583614"></circle> <path d="M87.8787879 52.5701459c-3.77558 3.5801117-9.6924335 3.5801117-13.4680135 0" stroke="#4550E5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M68.7766554 39.5959596c.5742368-1.3503252 1.89965-2.2269649 3.3670034-2.2269649 1.4673534 0 2.7927666.8766397 3.3670034 2.2269649M86.7340067 39.5959596c.5742368-1.3503252 1.89965-2.2269649 3.3670034-2.2269649 1.4673534 0 2.7927666.8766397 3.3670034 2.2269649" stroke="#2F495E" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M102.671156 99.9775533V98.630752M59.5735129 107.138047v-8.507295M102.671156 107.138047v-8.507295" stroke="#4550E5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M102.671156 107.138047h11.223345c1.239696 0 2.244668-1.004972 2.244668-2.244669v-2.693602c0-19.3392644-15.677571-35.0168355-35.0168345-35.0168355-19.339264 0-35.0168351 15.6775711-35.0168351 35.0168355v2.693602c0 1.239697 1.0049725 2.244669 2.244669 2.244669h11.2233445v12.121212h43.0976431v-12.121212z" fill="#108775"></path> <path d="M81.1223345 67.1829405v52.0763185" stroke="#2F495E" stroke-linejoin="round"></path> <path d="M59.5735129 107.138047v-8.507295M102.671156 107.138047v-8.507295M102.671156 107.138047h11.223345c1.239696 0 2.244668-1.004972 2.244668-2.244669v-2.693602c0-19.3392644-15.677571-35.0168355-35.0168345-35.0168355-19.339264 0-35.0168351 15.6775711-35.0168351 35.0168355v2.693602c0 1.239697 1.0049725 2.244669 2.244669 2.244669h11.2233445v12.121212h43.0976431v-12.121212z" stroke="#2F495E" stroke-linecap="round" stroke-linejoin="round"></path> <circle fill="#FFF" opacity=".6" cx="104.983165" cy="81.5488215" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="98.2491582" cy="88.2828283" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="104.983165" cy="95.016835" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="98.2491582" cy="101.750842" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="98.2491582" cy="115.218855" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="91.5151515" cy="95.016835" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="84.7811448" cy="101.750842" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="91.5151515" cy="108.484848" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="84.7811448" cy="115.218855" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="71.3131313" cy="101.750842" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="78.047138" cy="108.484848" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="71.3131313" cy="115.218855" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="57.8451178" cy="88.2828283" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="64.5791246" cy="95.016835" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="64.5791246" cy="108.484848" r="1.34680135"></circle> <circle fill="#FFF" opacity=".6" cx="51.1111111" cy="95.016835" r="1.34680135"></circle> <path d="M88.013468 136.767677c0-1.428776-.5675789-2.799033-1.5778759-3.80933s-2.3805538-1.577876-3.8093295-1.577876h-9.5847362c-7.003367 0-13.4680135-2.446689-13.4680135-20.20202v-4.040404H48.7991021v4.040404c0 25.611672 13.1762065 30.976431 24.2424243 30.976431h9.5847362c1.4306062.005999 2.8043509-.559654 3.8159511-1.571254 1.0116002-1.0116 1.5772527-2.385345 1.5712543-3.815951zM136.520763 131.380471h-9.607183c-7.003367 0-13.468013-2.446689-13.468013-20.20202v-4.040404h-10.774411v4.040404c0 25.611672 13.176207 30.976431 24.242424 30.976431h9.607183c2.975272 0 5.387206-2.411934 5.387206-5.387205 0-2.975272-2.411934-5.387206-5.387206-5.387206z" stroke="#2F495E" fill="#FFF" stroke-linejoin="round"></path> <path d="M64.7362514 22.962963c6.7340067 1.3468013 21.3468013 4.6464646 35.9147026-1.3468014 12.547699-27.90123455-45.5218855-28.91133556-52.0763188-1.1672278-.1481997.6398229-.0087515 1.3124551.3815938 1.8406285.3951843.5432282 1.0128939.8809094 1.6835016.9203142 8.2828283.4489338 8.664422 21.3468014 7.2278339 30.7295174C53.3782267 83.1200898 73.28844 84.691358 81.1447811 100.40404c8.1930416-16.3860826 29.5398429-17.3063969 22.4466889-50.4152633-.24642-1.350618-.24642-2.7346795 0-4.0852975 1.481482-9.1133557 4.242425-24.2648709-3.030303-24.2648709l-1.3243544.5387205c.3815937 4.4893379 5.7912454 41.1223345-18.338945 42.6487094C56.7676768 66.352413 60.9203143 22.962963 64.7362514 22.962963z" fill="#2F495E"></path> <path d="M64.7362514 22.962963c6.7340067 1.3468013 21.3468013 4.6464646 35.9147026-1.3468014 12.547699-27.90123455-45.5218855-28.91133556-52.0763188-1.1672278-.1481997.6398229-.0087515 1.3124551.3815938 1.8406285.3951843.5432282 1.0128939.8809094 1.6835016.9203142 8.2828283.4489338 8.664422 21.3468014 7.2278339 30.7295174C53.3782267 83.1200898 73.28844 84.691358 81.1447811 100.40404c8.1930416-16.3860826 29.5398429-17.3063969 22.4466889-50.4152633-.24642-1.350618-.24642-2.7346795 0-4.0852975 1.481482-9.1133557 4.242425-24.2648709-3.030303-24.2648709l-1.3243544.5387205c.3815937 4.4893379 5.7912454 41.1223345-18.338945 42.6487094C56.7676768 66.352413 60.9203143 22.962963 64.7362514 22.962963z" stroke="#2F495E" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M112.637486 52.4130191c-.586048-.0280066-1.133408.292479-1.395795.817254-.262388.524775-.19036 1.1549544.183674 1.6069884.792087.7912038 1.042914 1.9751653.639716 3.019596-.403199 1.0444307-1.384525 1.7527235-2.502791 1.8064422-7.115601 1.2570146-22.8282833-12.0763188-28.6644224-8.4175085-5.8361392-3.6588103-21.6161617 9.6745231-28.6195287 8.4175085-1.1182661-.0537187-2.0995921-.7620115-2.5027909-1.8064422-.4031989-1.0444307-.152371-2.2283922.6397157-3.019596.3812073-.4582205.4506762-1.1002759.1763006-1.629429-.2743757-.529153-.839155-.842339-1.4333151-.7948134-5.993266.3142536-6.1728395 14.2985409 8.6195286 13.647587 9.8540965-.4264871 18.7429854-4.4893379 23.1200898-10.7744108 4.4893378 6.2401796 13.2659932 10.3479237 23.1200894 10.7744108 14.792368.6509539 14.612795-13.3333334 8.619529-13.647587z" stroke="#2F495E" fill="#00C58E" stroke-linecap="round" stroke-linejoin="round"></path> <ellipse fill="#E2E8F0" cx="112.210999" cy="146.4422" rx="43.2996633" ry="3.36700337"></ellipse> <path d="M101.481481 137.373737h-6.105499l13.041526-40.40404c.361013-1.1343097 1.413446-1.9054892 2.603816-1.9079686h4.130191l-13.670034 42.3120086z" stroke="#2F495E" fill="#DAE1E9" stroke-linejoin="round"></path> <path d="M154.747475 137.373737h-53.265994l13.670034-42.356902h49.382716c.883996-.0035681 1.717126.4129968 2.244669 1.1223345.513207.706763.655204 1.6172115.381594 2.4466891l-12.413019 38.7878784z" fill="#DAE1E9"></path> <path d="M154.747521 137.373737H98.7654321v6.734007h50.5274969c1.450533.000012 2.841331-.577742 3.864904-1.605527 1.023574-1.027786 1.595611-2.420944 1.589642-3.871465l.000046-1.257015z" stroke="#2F495E" fill="#DAE1E9" stroke-linejoin="round"></path> <path d="M98.7654321 137.373737h-24.691358c-.3610672-.006018-.7094263.133215-.9668763.386445-.25745.253229-.4024219.599239-.4023718.960357-.0059692 1.45052.5660682 2.843679 1.5896416 3.871465 1.0235734 1.027785 2.4143709 1.605539 3.8649039 1.605527h20.6285073l-.0224467-6.823794z" stroke="#2F495E" fill="#DAE1E9" stroke-linejoin="round"></path> <path d="M154.747475 137.373737h-53.265994l13.670034-42.356902h49.382716c.883996-.0035681 1.717126.4129968 2.244669 1.1223345.513207.706763.655204 1.6172115.381594 2.4466891l-12.413019 38.7878784z" stroke="#2F495E" stroke-linejoin="round"></path></g> <g><path d="M35.35353491 145.9034794h4.548474c.02602192-.1954291.08163042-.3843097.16437852-.5583302l4.26582317-8.49297378-2.2191101-4.41670951-6.75956559 13.46801349zM48.8928948 145.9034794h2.1733225l-5.7049715-11.22334458-1.0290352 2.03830493 4.3713417 8.61845995c.0931624.1745186.1573117.3664762.1893425.5665797z"></path> <path d="M44.3333649 136.92480373l-4.49049217 8.97867567h8.97867567z"></path> <path d="M39.18189992 145.372303c-.01480806-.0277696-.02799611-.0564762-.03948988-.085958-.07972053-.1955801-.1042665-.4114737-.07066608-.6215425h-4.71592205l7.00841302-13.07884097 2.30080467 4.28908401.667171-1.25190119-2.00566985-3.74688737c-.05611718-.10799851-.39489871-.68545998-.97893313-.68545998-.26395862 0-.64223002.12122283-.94983534.69427619l-7.09986325 13.23753271c-.06027402.1146106-.35333044.7163167-.06235243 1.2496971.13301851.2424456.41568286.5311764 1.03920715.5311764h5.94634332c-.61936747 0-.90618864-.2843227-1.03920715-.5311764z" fill="#00C58E"></path> <path d="M53.093454 144.1101117l-5.9982464-10.97549875c-.0619698-.11541475-.4081457-.69914704-1.0107483-.69914704-.2713849 0-.6602986.11985378-.9765582.69692753l-.7756905 1.41161117.690215 1.26068418 1.0684443-1.96427025 5.9341398 10.81569376h-2.2565544c.028875.1787987.0126788.3623171-.0470116.5326834-.012571.0376133-.0283021.0740055-.0470115.1087562l-.019232.0399513c-.3034382.5371225-.959463.5659762-1.0876763.5659762h3.53014c.1303502 0 .7842382-.0288537 1.0876764-.5659762.1346239-.2441466.2307839-.6547567-.0918863-1.2273915z" fill="#108775"></path> <path d="M49.8126341 145.3442858l.019847-.0394725c.0193077-.0343343.0355419-.0702904.048515-.1074529.0615992-.1683247.0783134-.3496438.0485149-.5262999-.034321-.1905245-.1030571-.373293-.2028807-.5394573l-4.6905147-8.20589204-.7166983-1.24557634-.7122878 1.24557634-4.68830949 8.20589204c-.09102901.1681382-.15220247.3506342-.18082849.5394573-.03773233.2083741-.01398911.4231552.06836199.6184024.01219504.0293329.02618774.0578944.04189928.0855237.14113444.2412208.44104511.5284928 1.10261276.5284928h8.73269305c.1389292 0 .8159335-.0285079 1.1290755-.5591936zm-5.4932168-8.1729983l4.2869584 7.499773h-8.57171158l4.28475318-7.499773z" fill="#2F495E" fill-rule="nonzero"></path></g> <path d="M156.330708 127.579281l-.01609.029488c-.255283.432632-.671283.567999-1.080969.567999h-5.030031c-.503969 0-.867443-.211412-1.069745-.557252-.027732-.051183-.027732-.051183-.050192-.102109-.085146-.201874-.109708-.42406-.07303-.625457.02515-.165896.078884-.326197.16437-.483822l2.700563-4.726763.842981-1.47412.434718.755512.413528.71869 2.696252 4.717235c.088707.147661.149814.310144.18129.485047.031604.187362.013876.379683-.048917.551107-.017171.049187-.038652.096764-.053296.121709l-.011432.022736z" stroke="#2F495E" fill="#00C58E" fill-rule="nonzero"></path></g></svg>

            <svg width="197" height="160" xmlns="http://www.w3.org/2000/svg" class="inline-block">
              <g fill="none" fill-rule="evenodd">
                <path
                  d="M189.674523 89.7867565c-.003434-36.6675407-22.302993-69.6486929-56.32978-83.31201107C99.3179548-7.18857274 60.4018603 1.21168314 35.0407757 27.6942045 9.67969115 54.1767259 2.97010499 93.4196636 18.0920314 126.823793H181.683502c5.277806-11.63343 8.002598-24.262382 7.991021-37.0370365z"
                  fill="#E2E8F0"
                />
                <path
                  d="M11.2233446 126.801347H186.30752M1.12233446 126.801347h5.61167227M190.796857 126.801347h5.611673"
                  stroke="#2F495E"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <g transform="translate(18.765432 7.542088)">
                  <ellipse
                    fill="#E2E8F0"
                    cx="24.1077441"
                    cy="148.552189"
                    rx="11.2233446"
                    ry="3.36700337"
                  />
                  <path
                    d="M18.8776655 86.7340067c-.765013.7512771-1.1959666 1.7785065-1.1959666 2.8507296 0 1.072223.4309536 2.0994524 1.1959666 2.8507295l2.3569024 2.379349c1.5695374 1.5764314 1.5695374 4.1250276 0 5.7014592l-2.3569024 2.379349c-.765013.751277-1.1959666 1.778506-1.1959666 2.850729s.4309536 2.099453 1.1959666 2.85073M29.0909091 86.7340067c-1.5695375 1.5764315-1.5695375 4.1250276 0 5.7014591l2.3569023 2.379349c.7650131.7512771 1.1959667 1.7785065 1.1959667 2.8507295 0 1.0722231-.4309536 2.0994525-1.1959667 2.8507297l-2.3569023 2.379349c-1.5695375 1.576431-1.5695375 4.125028 0 5.701459"
                    stroke="#2F495E"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.2682379 142.154882c-3.84932629 0-7.40625057-2.053591-9.33091378-5.387205-1.92466322-3.333614-1.92466322-7.440797 0-10.774411 1.92466321-3.333614 5.48158749-5.387206 9.33091378-5.387205v5.387205c-2.97527134 0-5.38720535 2.411934-5.38720535 5.387205 0 2.975272 2.41193401 5.387206 5.38720535 5.387206v5.387205z"
                    stroke="#2F495E"
                    fill="#00C58E"
                    stroke-linejoin="round"
                  />
                  <rect
                    stroke="#2F495E"
                    fill="#FFF"
                    stroke-linejoin="round"
                    x="11.2682379"
                    y="113.872054"
                    width="26.5993266"
                    height="33.6700337"
                    rx="1.2"
                  />
                  <path
                    d="M102.671156 99.9775533V98.630752M59.5735129 107.138047v-8.507295M102.671156 107.138047v-8.507295"
                    stroke="#4550E5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M81.1223345 67.1829405v52.0763185"
                    stroke="#2F495E"
                    stroke-linejoin="round"
                  />
                  <circle fill="#FFF" opacity=".6" cx="104.983165" cy="81.5488215" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="98.2491582" cy="88.2828283" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="104.983165" cy="95.016835" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="98.2491582" cy="101.750842" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="98.2491582" cy="115.218855" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="91.5151515" cy="95.016835" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="84.7811448" cy="101.750842" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="91.5151515" cy="108.484848" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="84.7811448" cy="115.218855" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="71.3131313" cy="101.750842" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="78.047138" cy="108.484848" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="71.3131313" cy="115.218855" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="57.8451178" cy="88.2828283" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="64.5791246" cy="95.016835" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="64.5791246" cy="108.484848" r="1.34680135" />
                  <circle fill="#FFF" opacity=".6" cx="51.1111111" cy="95.016835" r="1.34680135" />
                  <path
                    d="M88.013468 136.767677c0-1.428776-.5675789-2.799033-1.5778759-3.80933s-2.3805538-1.577876-3.8093295-1.577876h-9.5847362c-7.003367 0-13.4680135-2.446689-13.4680135-20.20202v-4.040404H48.7991021v4.040404c0 25.611672 13.1762065 30.976431 24.2424243 30.976431h9.5847362c1.4306062.005999 2.8043509-.559654 3.8159511-1.571254 1.0116002-1.0116 1.5772527-2.385345 1.5712543-3.815951zM136.520763 131.380471h-9.607183c-7.003367 0-13.468013-2.446689-13.468013-20.20202v-4.040404h-10.774411v4.040404c0 25.611672 13.176207 30.976431 24.242424 30.976431h9.607183c2.975272 0 5.387206-2.411934 5.387206-5.387205 0-2.975272-2.411934-5.387206-5.387206-5.387206z"
                    stroke="#2F495E"
                    fill="#FFF"
                    stroke-linejoin="round"
                  />
                  <ellipse
                    fill="#E2E8F0"
                    cx="112.210999"
                    cy="146.4422"
                    rx="43.2996633"
                    ry="3.36700337"
                  />
                  <path
                    d="M101.481481 137.373737h-6.105499l13.041526-40.40404c.361013-1.1343097 1.413446-1.9054892 2.603816-1.9079686h4.130191l-13.670034 42.3120086z"
                    stroke="#2F495E"
                    fill="#DAE1E9"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M154.747475 137.373737h-53.265994l13.670034-42.356902h49.382716c.883996-.0035681 1.717126.4129968 2.244669 1.1223345.513207.706763.655204 1.6172115.381594 2.4466891l-12.413019 38.7878784z"
                    fill="#DAE1E9"
                  />
                  <path
                    d="M154.747521 137.373737H98.7654321v6.734007h50.5274969c1.450533.000012 2.841331-.577742 3.864904-1.605527 1.023574-1.027786 1.595611-2.420944 1.589642-3.871465l.000046-1.257015z"
                    stroke="#2F495E"
                    fill="#DAE1E9"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M98.7654321 137.373737h-24.691358c-.3610672-.006018-.7094263.133215-.9668763.386445-.25745.253229-.4024219.599239-.4023718.960357-.0059692 1.45052.5660682 2.843679 1.5896416 3.871465 1.0235734 1.027785 2.4143709 1.605539 3.8649039 1.605527h20.6285073l-.0224467-6.823794z"
                    stroke="#2F495E"
                    fill="#DAE1E9"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M154.747475 137.373737h-53.265994l13.670034-42.356902h49.382716c.883996-.0035681 1.717126.4129968 2.244669 1.1223345.513207.706763.655204 1.6172115.381594 2.4466891l-12.413019 38.7878784z"
                    stroke="#2F495E"
                    stroke-linejoin="round"
                  />
                </g>
                <g>
                  <path
                    d="M35.35353491 145.9034794h4.548474c.02602192-.1954291.08163042-.3843097.16437852-.5583302l4.26582317-8.49297378-2.2191101-4.41670951-6.75956559 13.46801349zM48.8928948 145.9034794h2.1733225l-5.7049715-11.22334458-1.0290352 2.03830493 4.3713417 8.61845995c.0931624.1745186.1573117.3664762.1893425.5665797z"
                  />
                  <path d="M44.3333649 136.92480373l-4.49049217 8.97867567h8.97867567z" />
                  <path
                    d="M39.18189992 145.372303c-.01480806-.0277696-.02799611-.0564762-.03948988-.085958-.07972053-.1955801-.1042665-.4114737-.07066608-.6215425h-4.71592205l7.00841302-13.07884097 2.30080467 4.28908401.667171-1.25190119-2.00566985-3.74688737c-.05611718-.10799851-.39489871-.68545998-.97893313-.68545998-.26395862 0-.64223002.12122283-.94983534.69427619l-7.09986325 13.23753271c-.06027402.1146106-.35333044.7163167-.06235243 1.2496971.13301851.2424456.41568286.5311764 1.03920715.5311764h5.94634332c-.61936747 0-.90618864-.2843227-1.03920715-.5311764z"
                    fill="#00C58E"
                  />
                  <path
                    d="M53.093454 144.1101117l-5.9982464-10.97549875c-.0619698-.11541475-.4081457-.69914704-1.0107483-.69914704-.2713849 0-.6602986.11985378-.9765582.69692753l-.7756905 1.41161117.690215 1.26068418 1.0684443-1.96427025 5.9341398 10.81569376h-2.2565544c.028875.1787987.0126788.3623171-.0470116.5326834-.012571.0376133-.0283021.0740055-.0470115.1087562l-.019232.0399513c-.3034382.5371225-.959463.5659762-1.0876763.5659762h3.53014c.1303502 0 .7842382-.0288537 1.0876764-.5659762.1346239-.2441466.2307839-.6547567-.0918863-1.2273915z"
                    fill="#108775"
                  />
                  <path
                    d="M49.8126341 145.3442858l.019847-.0394725c.0193077-.0343343.0355419-.0702904.048515-.1074529.0615992-.1683247.0783134-.3496438.0485149-.5262999-.034321-.1905245-.1030571-.373293-.2028807-.5394573l-4.6905147-8.20589204-.7166983-1.24557634-.7122878 1.24557634-4.68830949 8.20589204c-.09102901.1681382-.15220247.3506342-.18082849.5394573-.03773233.2083741-.01398911.4231552.06836199.6184024.01219504.0293329.02618774.0578944.04189928.0855237.14113444.2412208.44104511.5284928 1.10261276.5284928h8.73269305c.1389292 0 .8159335-.0285079 1.1290755-.5591936zm-5.4932168-8.1729983l4.2869584 7.499773h-8.57171158l4.28475318-7.499773z"
                    fill="#2F495E"
                    fill-rule="nonzero"
                  />
                </g>
                <path
                  d="M156.330708 127.579281l-.01609.029488c-.255283.432632-.671283.567999-1.080969.567999h-5.030031c-.503969 0-.867443-.211412-1.069745-.557252-.027732-.051183-.027732-.051183-.050192-.102109-.085146-.201874-.109708-.42406-.07303-.625457.02515-.165896.078884-.326197.16437-.483822l2.700563-4.726763.842981-1.47412.434718.755512.413528.71869 2.696252 4.717235c.088707.147661.149814.310144.18129.485047.031604.187362.013876.379683-.048917.551107-.017171.049187-.038652.096764-.053296.121709l-.011432.022736z"
                  stroke="#2F495E"
                  fill="#00C58E"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div> -->

          <div class="ContentCV-right-imageAvatarMain">
            <div class="ContentCV-right-imageAvatarMainStyle h-img-100-100">
              <img class="h-img-small" src="~assets/images/CV-Hoang-Hoa-Profile.png" alt />
            </div>
          </div>

          <div style="text-align:center;padding-top:20px;">WEBSITE UPDATING...</div>

          <div class="informationSimple">
            <div class="informationSimpleImage">
              <img class="imageIconMini" src alt />
            </div>
            <p class="informationSimpleContent"></p>
          </div>

          <!-- <div class="informationDiffirent">
            <div class="informationDiffirentSkill">
              <div class="typeInformationTitle">
                <div class="imageIconTitle">
                </div>
                <div class="nameTitle">
                  HỌC TẬP
                </div>
              </div>

              <div class="listSkill">
                <p class="nameSkill">

                </p>

                <div class="progressSkill">

                </div>
              </div>
            </div>

            <div class="informationDiffirentLang">
              <div class="typeInformationTitle">
                <div class="imageIconTitle">
                </div>
                <div class="nameTitle">
                  HỌC TẬP
                </div>
              </div>

              <div class="listLang">
                <p class="langName">

                </p>
                <p class="langProgress">

                </p>
              </div>
            </div>

            <div class="informationDiffirentFavorite">
              <div class="typeInformationTitle">
                <div class="imageIconTitle">
                </div>
                <div class="nameTitle">
                  HỌC TẬP
                </div>
              </div>

              <div class="listFavorite">
                <p class="nameFavorite">

                </p>
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>

    <div class="h-container" id="AboutMe">
      <div class="maintenaceImage">
        <img src="@/assets/images/testSVG.svg" alt="testSVG" />
        <div style="text-align: center;position: relative;bottom: 160px;">
          Sorry, we're down for maintenace.
          <div>We'll be back shortly.</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  head() {
    return {
      title: this.title,
      meta: [{ hid: this.title, name: this.title, content: this.title }]
    };
  },
  data() {
    return {
      title: "Hoang Hoa Profile - by Nova",
      subtitle: [
        "Welcome! You may call me Nova.",
        "This is project Hoang Hoa Profile website."
      ],

    };
  },
  components: {
    Logo
  },
  methods: {
    scrollElement(el) {
      // let data = document.getElementById(el)
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

<style lang="scss" scoped>
.Welcome-container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.Welcome-container-logo {
    display: flex;
    text-align: center;
    justify-content: center;
}

.Welcome-container-logo-width {
    width: 33%;
}

.Welcome-container__title {
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.Welcome-container__subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.Welcome-container-links {
  padding-top: 15px;
}

.ContentCV {
    //   display: flex;
    background: #f7fafc;
    border: 1px solid #35495e;
    border-radius: 12px;
    overflow: hidden;
}

.ContentCV-left {
    // width: 66.66%;
    padding: 28px;
    background: #fff;
}

.ContentCV-left-sup {
    padding: 12px 0;
}

.ContentCV-left-main-name {
    font-size: 52px;
    font-weight: 500;
    color: #5f9ea0;
    text-align: center;
}

.ContentCV-left-main-work {
    font-size: 36px;
    font-weight: 700;
    color: #a9a9a9;
    padding-bottom: 32px;
    text-align: center;
}

.ContentCV-left-main-about-listTernPlans {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-inline-start: 60px;
}

.ContentCV-left-sup-typeInformationTitle {
    display: flex;
    text-align: center;
    align-items: center;
}

.imageIconTitle {
    margin-right: 12px;
    //   border-radius: 50%;
    //   width: 55px;
    //   height: 55px;
    //   background: #5f9ea0;
    //   height: 55px;
}

.imageIconTitleStyle {
    width: 100%;
}

.imageIconTitleStyleB {
    border-radius: 50%;
    width: 55px;
    height: 55px;
    background: #5f9ea0;
    height: 55px;
}

.nameTitle {
    font-size: 24px;
    font-weight: 600;
    color: #5f9ea0;
    padding-right: 12px;
}

.alinetypeInformationTitle {
    //   border-bottom: 1px solid #35495e;
    border-bottom: 1px solid #5f9ea0;
}

.typeInformation {
    padding: 12px 0px;
}

.typeInformationContentTitle {
    display: flex;
    justify-content: space-between;
}

.typeInformationContent {
    padding: 12px 12px;
}

.typeInformationContentTitleName {
    font-size: 24px;
    font-weight: 600;
    color: #35495ed4;
    max-width: 80%;
}

.typeInformationContentTitleTime {
    color: #869099;
}

.typeInformationContentFull {
    color: #869099;
}

.typeInformationContentMain {
    padding-bottom: 12px;
}

.typeInformationContentSup {
    padding-bottom: 12px;
}

.ContentCV-right {
    // width: 33.33%;
    background: #f7fafc;
    padding: 28px;
}

.ContentCV-right-imageAvatarMain {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;
    padding-top: 12px;
}

.ContentCV-right-imageAvatarMainStyle {
    border-radius: 50%;
    background: #e2e8f0;
    // width: 400px;
    // height: 400px;
    width: 100%;
    height: auto;
    overflow: hidden;
}

.maintenaceImage {
  position: relative;
}

#CVMe {
    padding-top: 80px;
}
</style>
