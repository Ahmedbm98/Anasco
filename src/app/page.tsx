export default function Home() {
  return (
    <>
      <main className="grid grid-cols-1 min-h-dvh">
        <div className="wrapper-content bg-bgMainColor relative">
          <h1 className="text-white text-[clamp(2rem,4vw,5rem)] font-semibold text-center flex items-center justify-center">
            Learning Management Platform 
          </h1>
          <div className="text-secondary text-[clamp(1.5rem,3vw,3rem)] font-semibold  bg-white px-10 py-6 absolute bottom-0 left-0  flex justify-center items-center ">
            إبدء
          </div>
        </div>
        <div className="wrapper-form flex items-center justify-center">
          <form className="flex flex-col items-center justify-center gap-12 px-10 py-20 bg-white border-2 border-purple-900  rounded-[40px] w-full max-w-[924px] shadow-md">
            {/* <div>
              <Image
                src={"./public/imgs/logo.png"}
                alt="Logo Of A Company"
                width={200}
                height={200}
                className="mx-auto mt-10 mb-5"
              />
            </div> */}
            <h2 className="text-secondary text-[clamp(1.4rem,3vw,4rem)] font-semibold text-center mb-10">
              تسجيل دخول
            </h2>
            <div className="w-full">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="البريد الإلكتروني"
                className="bg-bgGrayColor w-full  px-5 py-4 rounded-3xl outline-none"
              />
            </div>
            <div className="w-full">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="كلمة المرور"
                className="bg-bgGrayColor w-full  px-5 py-4 rounded-3xl outline-none"
              />
            </div>
            <div className="w-full ">
              <small className="text-redColor text-[clamp(1rem,1vw,2rem)] text-start ps-2">
                نسيت كلمة المرور ؟
              </small>
            </div>
            <button className="bg-rose-500 text-white text-[clamp(1.2rem,2vw,2.5rem)]  px-10 py-4 rounded-3xl w-full">
              إنشاء حساب
            </button>
            <div>
              <p>سجل الدخول عبر</p>
            </div>
            <ul>
              <li className="bg-secondary w-[77px] h-[77px] flex items-center justify-center rounded-[38.5px]">
                <svg
                  width="29"
                  height="33"
                  viewBox="0 0 29 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.4639 25.7174C26.9649 26.8703 26.3742 27.9316 25.6897 28.9073C24.7568 30.2374 23.9929 31.1582 23.4043 31.6694C22.4917 32.5087 21.514 32.9385 20.4669 32.9629C19.7153 32.9629 18.8088 32.749 17.7537 32.3152C16.6951 31.8833 15.7222 31.6694 14.8327 31.6694C13.8997 31.6694 12.8992 31.8833 11.829 32.3152C10.7571 32.749 9.89364 32.9751 9.23345 32.9975C8.22943 33.0403 7.22867 32.5983 6.22973 31.6694C5.59216 31.1133 4.79469 30.16 3.83935 28.8095C2.81434 27.3673 1.97165 25.695 1.31147 23.7884C0.604433 21.729 0.25 19.7348 0.25 17.8041C0.25 15.5926 0.727874 13.6852 1.68505 12.0868C2.4373 10.8029 3.43806 9.79008 4.6906 9.04658C5.94313 8.30308 7.2965 7.92421 8.75395 7.89997C9.55142 7.89997 10.5972 8.14664 11.8968 8.63144C13.1927 9.11787 14.0248 9.36455 14.3896 9.36455C14.6624 9.36455 15.5868 9.07611 17.1538 8.50108C18.6357 7.9678 19.8864 7.74699 20.911 7.83397C23.6874 8.05804 25.7733 9.1525 27.1604 11.1243C24.6774 12.6288 23.4491 14.7361 23.4735 17.4393C23.4959 19.5449 24.2598 21.2972 25.761 22.6884C26.4414 23.3341 27.2012 23.8332 28.0465 24.1876C27.8632 24.7193 27.6697 25.2285 27.4639 25.7174V25.7174ZM21.0964 0.660554C21.0964 2.31093 20.4934 3.85188 19.2916 5.27817C17.8413 6.97375 16.087 7.95354 14.1847 7.79893C14.1605 7.60094 14.1464 7.39256 14.1464 7.17358C14.1464 5.58922 14.8361 3.89364 16.061 2.50728C16.6725 1.80533 17.4502 1.22168 18.3933 0.756087C19.3344 0.297442 20.2245 0.0438011 21.0617 0.000366211C21.0862 0.220996 21.0964 0.441639 21.0964 0.660533V0.660554Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li className="bg-secondary w-[77px] h-[77px] flex items-center justify-center rounded-[38.5px]">
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.9998 13.5V19.89H24.6106C24.2325 21.945 23.0978 23.6851 21.3961 24.8551L26.5888 29.0101C29.6142 26.1302 31.3597 21.9001 31.3597 16.8752C31.3597 15.7052 31.2579 14.5801 31.0687 13.5002L15.9998 13.5Z"
                    fill="white"
                  />
                  <path
                    d="M7.03298 19.6405L5.86183 20.565L1.71631 23.895C4.34903 29.2799 9.74499 33 15.9995 33C20.3194 33 23.9411 31.53 26.5885 29.01L21.3958 24.855C19.9703 25.845 18.1521 26.445 15.9995 26.445C11.8395 26.445 8.30507 23.5501 7.03952 19.65L7.03298 19.6405Z"
                    fill="white"
                  />
                  <path
                    d="M1.71624 9.10498C0.625389 11.3249 0 13.8299 0 16.4999C0 19.1698 0.625389 21.6749 1.71624 23.8948C1.71624 23.9097 7.03997 19.6348 7.03997 19.6348C6.71997 18.6448 6.53082 17.5949 6.53082 16.4997C6.53082 15.4046 6.71997 14.3546 7.03997 13.3646L1.71624 9.10498Z"
                    fill="white"
                  />
                  <path
                    d="M15.9998 6.57C18.3562 6.57 20.4507 7.40997 22.1235 9.03L26.7052 4.30506C23.927 1.6351 20.3199 0 15.9998 0C9.74532 0 4.34903 3.70499 1.71631 9.10501L7.03987 13.365C8.30525 9.46497 11.8398 6.57 15.9998 6.57Z"
                    fill="white"
                  />
                </svg>
              </li>
              <li className="bg-secondary w-[77px] h-[77px] flex items-center justify-center rounded-[38.5px]">
                <svg
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 0C7.88738 0 0.5 7.38738 0.5 16.5C0.5 24.2378 5.82752 30.7309 13.0143 32.5142V21.5424H9.61196V16.5H13.0143V14.3273C13.0143 8.71134 15.5559 6.1083 21.0696 6.1083C22.115 6.1083 23.9188 6.31356 24.6567 6.51816V11.0887C24.2673 11.0477 23.5908 11.0273 22.7506 11.0273C20.0452 11.0273 18.9998 12.0523 18.9998 14.7167V16.5H24.3894L23.4634 21.5424H18.9998V32.8792C27.1699 31.8925 33.5007 24.9361 33.5007 16.5C33.5 7.38738 26.1126 0 17 0Z"
                    fill="white"
                  />
                </svg>
              </li>
            </ul>
          </form>
        </div>
      </main>
    </>
  );
}

// <div className="flex overflow-hidden relative mx-auto w-screen max-w-none h-screen bg-white max-md:flex-col max-md:h-auto max-md:max-w-[991px] max-sm:max-w-screen-sm">
//   <div className="flex relative flex-col justify-center items-start px-9 py-0 h-full bg-cyan-700 left-[section] w-[45.6%] max-md:px-5 max-md:py-10 max-md:w-full max-md:h-[300px] max-sm:px-5 max-sm:py-5 max-sm:h-[200px]">
//     <div
//       layer-name="Learning Management Platform "
//       className="mb-auto w-full text-9xl font-bold text-white leading-[140px] max-md:text-6xl max-md:text-center max-md:leading-[70px] max-sm:text-4xl max-sm:leading-10"
//     >
//       Learning Management Platform
//     </div>
//     <div
//       layer-name="إبدء"
//       className="absolute bottom-0 left-0 py-16 pr-0 pl-28 text-9xl font-bold text-purple-900 bg-white h-[364px] w-[404px]"
//     >
//       إبدء
//     </div>
//   </div>
//   <div className="flex justify-center items-center px-5 py-0 h-full right-[section] w-[54.4%] max-md:px-5 max-md:py-10 max-md:w-full">
//     <div className="flex relative flex-col items-center px-28 pt-20 pb-20 bg-white border border-purple-900 border-solid shadow-sm h-[1133px] rounded-[40px] w-[924px] max-md:px-8 max-md:py-10 max-md:w-full max-md:h-auto max-md:max-w-[600px] max-sm:px-5 max-sm:py-8 max-sm:rounded-3xl">
//       <Image
//         scr="https://api.builder.io/api/v1/image/assets/TEMP/635e591f443847b9091992517cace1d8ad0adacb?width=964"
//         altText=""
//         className="absolute left-2/4 -translate-x-2/4 h-[121px] top-[76px] w-[482px] max-md:top-5 max-md:h-[75px] max-md:w-[300px] max-sm:w-60 max-sm:h-[60px]"
//       />
//       <div
//         layer-name="تسجيل دخول"
//         className="mt-44 mb-16 text-4xl font-bold text-center text-purple-900 max-md:mt-24 max-md:text-3xl max-sm:mt-20 max-sm:text-2xl"
//       >
//         تسجيل دخول
//       </div>
//       <div className="flex flex-col gap-4 items-end p-8 mb-16 bg-neutral-100 h-[88px] rounded-[40px] w-[710px] max-md:w-full max-sm:p-5 max-sm:h-auto">
//         <div className="flex gap-5 items-center">
//           <div>
//             <div
//               dangerouslySetInnerHTML={{
//                 __html:
//                   "<svg id=&quot;1:452&quot; width=&quot;23&quot; height=&quot;19&quot; viewBox=&quot;0 0 23 19&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;email-icon&quot; style=&quot;width: 20.571px; height: 16px; stroke-width: 2px; stroke: #666&quot;> <path d=&quot;M2.57157 2.64286L9.55172 7.91402L9.55405 7.91595C10.3291 8.48433 10.7169 8.76868 11.1416 8.87853C11.517 8.97563 11.9116 8.97563 12.287 8.87853C12.7121 8.76858 13.1009 8.4834 13.8774 7.91402C13.8774 7.91402 18.3545 4.47822 20.8573 2.64286M1.42871 13.8431V5.15737C1.42871 3.87725 1.42871 3.23671 1.67784 2.74777C1.89698 2.31768 2.24639 1.96827 2.67648 1.74913C3.16542 1.5 3.80596 1.5 5.08608 1.5H18.3432C19.6233 1.5 20.2625 1.5 20.7514 1.74913C21.1815 1.96827 21.5321 2.31768 21.7513 2.74777C22.0001 3.23623 22.0001 3.87599 22.0001 5.15361V13.8469C22.0001 15.1246 22.0001 15.7634 21.7513 16.2519C21.5321 16.682 21.1815 17.032 20.7514 17.2511C20.263 17.5 19.6241 17.5 18.3465 17.5H5.08232C3.8047 17.5 3.16494 17.5 2.67648 17.2511C2.24639 17.032 1.89698 16.682 1.67784 16.2519C1.42871 15.7629 1.42871 15.1232 1.42871 13.8431Z&quot; stroke=&quot;#666666&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
//               }}
//             />
//           </div>
//           <div
//             layer-name="البريد الإلكتروني"
//             className="text-2xl text-stone-500 max-sm:text-lg"
//           >
//             البريد الإلكتروني
//           </div>
//         </div>
//       </div>
//       <div className="mb-9 h-[132px] w-[710px] max-md:w-full">
//         <div className="flex gap-96 justify-end items-center p-8 bg-neutral-100 h-[88px] rounded-[40px] w-[710px] max-md:w-full max-sm:gap-5 max-sm:justify-between max-sm:p-5 max-sm:h-auto">
//           <Image
//             scr="https://api.builder.io/api/v1/image/assets/TEMP/453e440f50408543a6bc17ac9d371a321ca42435?width=56"
//             altText="Vector"
//             className="w-7 h-[18px] stroke-[2px] stroke-stone-500"
//           />
//           <div className="flex gap-5 items-center">
//             <div>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     "<svg id=&quot;1:458&quot; width=&quot;18&quot; height=&quot;22&quot; viewBox=&quot;0 0 18 22&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;lock-icon&quot; style=&quot;width: 16px; height: 20px; stroke-width: 2px; stroke: #666&quot;> <path d=&quot;M6.23047 7.66667H4.2002C3.08009 7.66667 2.51962 7.66667 2.0918 7.90887C1.71547 8.12193 1.40973 8.46164 1.21799 8.87977C1 9.35513 1 9.97788 1 11.2224V17.4447C1 18.6892 1 19.3112 1.21799 19.7865C1.40973 20.2047 1.71547 20.545 2.0918 20.758C2.5192 21 3.07902 21 4.19694 21H13.8031C14.921 21 15.48 21 15.9074 20.758C16.2837 20.545 16.5905 20.2047 16.7822 19.7865C17 19.3116 17 18.6905 17 17.4484V11.2188C17 9.97666 17 9.35467 16.7822 8.87977C16.5905 8.46164 16.2837 8.12193 15.9074 7.90887C15.4796 7.66667 14.9203 7.66667 13.8002 7.66667H11.7689M6.23047 7.66667H11.7689M6.23047 7.66667C6.10302 7.66667 6 7.55187 6 7.41026V4.33333C6 2.49238 7.34315 1 9 1C10.6569 1 12 2.49238 12 4.33333V7.41026C12 7.55187 11.8964 7.66667 11.7689 7.66667&quot; stroke=&quot;#666666&quot; stroke-width=&quot;2&quot; stroke-linecap=&quot;round&quot; stroke-linejoin=&quot;round&quot;></path> </svg>",
//                 }}
//               />
//             </div>
//             <div
//               layer-name="كلمة المرور"
//               className="text-2xl text-stone-500 max-sm:text-lg"
//             >
//               كلمة المرور
//             </div>
//           </div>
//         </div>
//         <div
//           layer-name="نسيت كلمة المرور ؟"
//           className="absolute mt-5 text-xl font-bold text-rose-500 right-[107px] max-sm:static max-sm:mt-2.5 max-sm:text-base max-sm:text-right"
//         >
//           نسيت كلمة المرور ؟
//         </div>
//       </div>
//       <div
//         layer-name="إنشاء حساب"
//         className="gap-2.5 px-12 py-6 mb-14 h-20 text-2xl text-white bg-rose-500 rounded-3xl w-[710px] max-md:w-full max-sm:text-xl"
//       >
//         إنشاء حساب
//       </div>
//       <div className="flex flex-col gap-12 items-center w-[710px] max-md:w-full">
//         <div>
//           <div
//             dangerouslySetInnerHTML={{
//               __html:
//                 "<svg id=&quot;1:463&quot; width=&quot;710&quot; height=&quot;31&quot; viewBox=&quot;0 0 710 31&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;divider-line&quot; style=&quot;display: flex; justify-content: center; align-items: center; gap: 46px; align-self: stretch&quot;> <path d=&quot;M69 15.5H229&quot; stroke=&quot;#949393&quot; stroke-width=&quot;1.3&quot; stroke-linecap=&quot;round&quot;></path> <text fill=&quot;#0E0E0E&quot; xml:space=&quot;preserve&quot; style=&quot;white-space: pre&quot; font-family=&quot;IBM Plex Sans&quot; font-size=&quot;24&quot; letter-spacing=&quot;0em&quot;><tspan x=&quot;275&quot; y=&quot;24.5&quot;>سجل الدخول عبر</tspan></text> <path d=&quot;M481 15.5H641&quot; stroke=&quot;#949393&quot; stroke-width=&quot;1.3&quot; stroke-linecap=&quot;round&quot;></path> </svg>",
//             }}
//           />
//         </div>
//         <div className="flex gap-7 justify-center items-center">
//           <div className="flex gap-2.5 justify-center items-center p-6 bg-purple-900 h-[77px] rounded-[38.5px] w-[77px] max-sm:p-5 max-sm:h-[60px] max-sm:w-[60px]">
//             <div>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     "<svg id=&quot;1:469&quot; layer-name=&quot;Social Icons&quot; data-component-name=&quot;Social Icons&quot; data-variant-name=&quot;Platform=Apple, Color=Negative&quot; width=&quot;34&quot; height=&quot;33&quot; viewBox=&quot;0 0 34 33&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;apple-icon&quot; style=&quot;width: 33px; height: 33px&quot;> <g clip-path=&quot;url(#clip0_1_469)&quot;> <path d=&quot;M30.4639 25.7174C29.9649 26.8703 29.3742 27.9316 28.6897 28.9073C27.7568 30.2374 26.9929 31.1582 26.4043 31.6694C25.4917 32.5087 24.514 32.9385 23.4669 32.9629C22.7153 32.9629 21.8088 32.749 20.7537 32.3152C19.6951 31.8833 18.7222 31.6694 17.8327 31.6694C16.8997 31.6694 15.8992 31.8833 14.829 32.3152C13.7571 32.749 12.8936 32.9751 12.2335 32.9975C11.2294 33.0403 10.2287 32.5983 9.22973 31.6694C8.59216 31.1133 7.79469 30.16 6.83935 28.8095C5.81434 27.3673 4.97165 25.695 4.31147 23.7884C3.60443 21.729 3.25 19.7348 3.25 17.8041C3.25 15.5926 3.72787 13.6852 4.68505 12.0868C5.4373 10.8029 6.43806 9.79008 7.6906 9.04658C8.94313 8.30308 10.2965 7.92421 11.754 7.89997C12.5514 7.89997 13.5972 8.14664 14.8968 8.63144C16.1927 9.11787 17.0248 9.36455 17.3896 9.36455C17.6624 9.36455 18.5868 9.07611 20.1538 8.50108C21.6357 7.9678 22.8864 7.74699 23.911 7.83397C26.6874 8.05804 28.7733 9.1525 30.1604 11.1243C27.6774 12.6288 26.4491 14.7361 26.4735 17.4393C26.4959 19.5449 27.2598 21.2972 28.761 22.6884C29.4414 23.3341 30.2012 23.8332 31.0465 24.1876C30.8632 24.7193 30.6697 25.2285 30.4639 25.7174ZM24.0964 0.660554C24.0964 2.31093 23.4934 3.85188 22.2916 5.27817C20.8413 6.97375 19.087 7.95354 17.1847 7.79893C17.1605 7.60094 17.1464 7.39256 17.1464 7.17358C17.1464 5.58922 17.8361 3.89364 19.061 2.50728C19.6725 1.80533 20.4502 1.22168 21.3933 0.756087C22.3344 0.297442 23.2245 0.0438011 24.0617 0.000366211C24.0862 0.220996 24.0964 0.441639 24.0964 0.660533V0.660554Z&quot; fill=&quot;white&quot;></path> </g> <defs> <clipPath id=&quot;clip0_1_469&quot;> <rect width=&quot;33&quot; height=&quot;33&quot; fill=&quot;white&quot; transform=&quot;translate(0.5)&quot;></rect> </clipPath> </defs> </svg>",
//                 }}
//               />
//             </div>
//           </div>
//           <div className="flex gap-2.5 justify-center items-center p-6 bg-purple-900 h-[77px] rounded-[38.5px] w-[77px] max-sm:p-5 max-sm:h-[60px] max-sm:w-[60px]">
//             <div>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     "<svg id=&quot;1:471&quot; layer-name=&quot;Social Icons&quot; data-component-name=&quot;Social Icons&quot; data-variant-name=&quot;Platform=Google, Color=Negative&quot; width=&quot;32&quot; height=&quot;33&quot; viewBox=&quot;0 0 32 33&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;google-icon&quot; style=&quot;display: flex; width: 32px; height: 33px; padding-right: 0.64px; flex-direction: column; justify-content: center; align-items: center&quot;> <g clip-path=&quot;url(#clip0_1_471)&quot;> <path d=&quot;M15.9998 13.5V19.89H24.6106C24.2325 21.945 23.0978 23.6851 21.3961 24.8551L26.5888 29.0101C29.6142 26.1302 31.3597 21.9001 31.3597 16.8752C31.3597 15.7052 31.2579 14.5801 31.0687 13.5002L15.9998 13.5Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M7.03298 19.6405L5.86183 20.565L1.71631 23.895C4.34903 29.2799 9.74499 33 15.9995 33C20.3194 33 23.9411 31.53 26.5885 29.01L21.3958 24.855C19.9703 25.845 18.1521 26.445 15.9995 26.445C11.8395 26.445 8.30507 23.5501 7.03952 19.65L7.03298 19.6405Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M1.71624 9.10498C0.625389 11.3249 0 13.8299 0 16.4999C0 19.1698 0.625389 21.6749 1.71624 23.8948C1.71624 23.9097 7.03997 19.6348 7.03997 19.6348C6.71997 18.6448 6.53082 17.5949 6.53082 16.4997C6.53082 15.4046 6.71997 14.3546 7.03997 13.3646L1.71624 9.10498Z&quot; fill=&quot;white&quot;></path> <path d=&quot;M15.9998 6.57C18.3562 6.57 20.4507 7.40997 22.1235 9.03L26.7052 4.30506C23.927 1.6351 20.3199 0 15.9998 0C9.74532 0 4.34903 3.70499 1.71631 9.10501L7.03987 13.365C8.30525 9.46497 11.8398 6.57 15.9998 6.57Z&quot; fill=&quot;white&quot;></path> </g> <defs> <clipPath id=&quot;clip0_1_471&quot;> <rect width=&quot;32&quot; height=&quot;33&quot; fill=&quot;white&quot;></rect> </clipPath> </defs> </svg>",
//                 }}
//               />
//             </div>
//           </div>
//           <div className="flex gap-2.5 justify-center items-center p-6 bg-purple-900 h-[77px] rounded-[38.5px] w-[77px] max-sm:p-5 max-sm:h-[60px] max-sm:w-[60px]">
//             <div>
//               <div
//                 dangerouslySetInnerHTML={{
//                   __html:
//                     "<svg id=&quot;1:473&quot; layer-name=&quot;Social Icons&quot; data-component-name=&quot;Social Icons&quot; data-variant-name=&quot;Platform=Facebook, Color=Negative&quot; width=&quot;34&quot; height=&quot;33&quot; viewBox=&quot;0 0 34 33&quot; fill=&quot;none&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot; class=&quot;facebook-icon&quot; style=&quot;width: 33px; height: 33px&quot;> <g clip-path=&quot;url(#clip0_1_473)&quot;> <path d=&quot;M17 0C7.88738 0 0.5 7.38738 0.5 16.5C0.5 24.2378 5.82752 30.7309 13.0143 32.5142V21.5424H9.61196V16.5H13.0143V14.3273C13.0143 8.71134 15.5559 6.1083 21.0696 6.1083C22.115 6.1083 23.9188 6.31356 24.6567 6.51816V11.0887C24.2673 11.0477 23.5908 11.0273 22.7506 11.0273C20.0452 11.0273 18.9998 12.0523 18.9998 14.7167V16.5H24.3894L23.4634 21.5424H18.9998V32.8792C27.1699 31.8925 33.5007 24.9361 33.5007 16.5C33.5 7.38738 26.1126 0 17 0Z&quot; fill=&quot;white&quot;></path> </g> <defs> <clipPath id=&quot;clip0_1_473&quot;> <rect width=&quot;33&quot; height=&quot;33&quot; fill=&quot;white&quot; transform=&quot;translate(0.5)&quot;></rect> </clipPath> </defs> </svg>",
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-4 items-center">
//           <div
//             layer-name="ليس لديك حساب ؟"
//             className="text-3xl text-stone-950 max-sm:text-xl"
//           >
//             ليس لديك حساب ؟
//           </div>
//           <div
//             layer-name="أنشاء حساب"
//             className="text-3xl font-bold text-rose-500 max-sm:text-xl"
//           >
//             أنشاء حساب
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
