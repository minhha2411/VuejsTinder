import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCircle,
  faCircleQuestion,
  faCircleXmark,
  faStar,
  faHeart,
  faFaceKissWinkHeart,
  faComments,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faUserSecret,
  faMapLocationDot,
  faMagnifyingGlass,
  faMinus,
  faLocation,
  faRankingStar,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faSketch } from "@fortawesome/free-brands-svg-icons";
library.add(faCircle);
library.add(faCircleQuestion);
library.add(faCircleXmark);
library.add(faStar);
library.add(faHeart);
library.add(faFaceKissWinkHeart);
library.add(faComments);
library.add(faUser);
library.add(faUserSecret);
library.add(faMapLocationDot);
library.add(faSketch);
library.add(faMagnifyingGlass);
library.add(faMinus);
library.add(faLocation);
library.add(faRankingStar);
library.add(faXmark);

const app = createApp(App).component("font-awesome-icon", FontAwesomeIcon);
app.use(Antd).mount("#app");

{
  /* <font-awesome-icon icon="fa-brands fa-sketch" /> V
<font-awesome-icon icon="fa-regular fa-circle" /> V 
<font-awesome-icon icon="fa-regular fa-circle-info" /> V -> questions
<font-awesome-icon icon="fa-regular fa-location-dot" /> V 
<font-awesome-icon icon="fa-regular fa-circle-xmark" /> V 
<font-awesome-icon icon="fa-light fa-circle-star" /> V
<font-awesome-icon icon="fa-light fa-circle-heart" /> V 
<font-awesome-icon icon="fa-brands fa-sketch" /> V 
<font-awesome-icon icon="fa-duotone fa-nfc-magnifying-glass" /> V 
<font-awesome-icon icon="fa-regular fa-head-side-heart" /> V 
<font-awesome-icon icon="fa-regular fa-comments" />
<font-awesome-icon icon="fa-light fa-user" /> */
}
