<template>
  <div class="w-[25%] mx-auto pt-4 pb-20 bg-white">
    <!-- Header -->
    <a-row>
      <a-col class="w-[85%] mx-auto my-4">
        <a-typography :style="{ color: 'rgb(239 ,68, 68)', fontSize: '18px' }"
          ><font-awesome-icon
            icon="fa-brands fa-sketch"
            class="text-md relative text-white"
            size="lg"
            :style="{ color: 'rgb(239 ,68, 68)' }"
          />
          Tinder
        </a-typography>
      </a-col>
    </a-row>
    <!-- Content -->
    <a-col>
      <div
        id="bg-img"
        class="tinder-card"
        :style="{
          background: 'url(' + currentImage + ') center center no-repeat',
        }"
        @click="nextImage"
      >
        <SlideVue
          :imageNumber="girlArray?.data?.image && girlArray.data.image.length"
          :imageIndex="currentImageIndex"
        />

        <a-col
          class="absolute z-2 top-[50%] left-[5%] text-white flex content-center"
        >
          <div class="text-4xl text-white mr-2">
            {{ girlLastName }}
          </div>
          <div class="text-2xl relative translate-y-[20%]">
            {{ girlArray && girlArray.data && girlArray.data?.age }}
          </div>
          <font-awesome-icon
            icon="fa-regular fa-circle-question"
            class="text-md relative translate-x-[50%] translate-y-[150%]"
          />
        </a-col>
        <a-col class="absolute z-2 top-[52%] left-[5%] flex">
          <div
            class="w-[10px] h-[10px] rounded-[50%] bg-green-300 translate-y-[100%] mr-2"
          ></div>
          <div class="text-lg text-white mr-2">
            {{
              girlArray && girlArray.data && girlArray.data?.active
                ? "Có Hoạt Động Gần Đây"
                : "Không Hoạt Động"
            }}
          </div>
        </a-col>
        <a-col class="absolute z-2 top-[52%] left-[5%] flex">
          <font-awesome-icon
            icon="fa-solid fa-map-location-dot"
            class="text-md relative translate-x-[5%] translate-y-[100%] text-white mr-2"
          />
          <div
            class="text-lg text-white mr-2 translate-x-[10%] translate-y-[30%]"
          >
            Cách xa
            {{ girlArray && girlArray.data && girlArray.data?.position }}km
          </div>
        </a-col>

        <a-col class="absolute z-2 top-[70%] left-[20%] flex">
          <div
            class="w-[50px] h-[50px] rounded-[50%] mr-2 border-[1px] border-red-500 cursor-pointer hover:bg-red-600"
          >
            <font-awesome-icon
              icon="fa-solid fa-xmark"
              class="text-md relative text-white mr-2 translate-x-[85%] translate-y-[35%]"
              size="2xl"
              :style="{ color: 'rgb(239 ,68, 68)' }"
            />
          </div>

          <div
            class="w-[50px] h-[50px] rounded-[50%] mr-2 border-[1px] border-cyan-400 translate-x-[75%] cursor-pointer hover:bg-cyan-600"
          >
            <font-awesome-icon
              icon="fa-regular fa-star"
              class="text-md relative text-white mr-2 translate-x-[45%] translate-y-[55%]"
              size="xl"
              :style="{ color: 'rgb(34 ,211, 238 )' }"
            />
          </div>

          <div
            class="w-[50px] h-[50px] rounded-[50%] mr-2 border-[1px] border-green-400 translate-x-[155%] cursor-pointer hover:bg-green-600"
          >
            <font-awesome-icon
              icon="fa-regular fa-heart"
              class="text-md relative text-white mr-2 translate-x-[60%] translate-y-[65%]"
              size="xl"
              :style="{ color: 'rgb(74 ,222, 128 )' }"
            />
          </div>
        </a-col>
      </div>
    </a-col>

    <!-- Toolbar -->
    <a-row class="w-[95%] mx-auto pt-6">
      <a-col class="flex justify-between w-[70%] mx-auto">
        <div class="cursor-pointer">
          <font-awesome-icon
            icon="fa-brands fa-sketch"
            class="text-red-400 relative"
            size="xl"
          />
        </div>
        <div class="cursor-pointer">
          <font-awesome-icon
            icon="fa-solid fa-magnifying-glass"
            class="text-slate-400 relative"
            size="xl"
          />
        </div>
        <div class="cursor-pointer relative">
          <font-awesome-icon
            icon="fa-regular fa-face-kiss-wink-heart"
            class="text-slate-400 relative"
            size="xl"
          />
          <div
            class="w-[18px] h-[18px] rounded-[50%] bg-yellow-300 mr-2 text-[0.7rem] font-bold translate-x-[90%] translate-y-[-180%]"
          >
            <span class="absolute translate-x-[100%]">7</span>
          </div>
        </div>
        <div class="cursor-pointer">
          <font-awesome-icon
            icon="fa-regular fa-comments"
            class="text-slate-400 relative"
            size="xl"
          />
        </div>
        <div class="cursor-pointer">
          <font-awesome-icon
            icon="fa-regular fa-user"
            class="text-slate-400 relative"
            size="xl"
          />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import axios from "axios";
import SlideVue from "./Slide.vue";
export default {
  components: {
    SlideVue,
  },
  data() {
    return {
      girlArray: [],
      currentImageIndex: 0,
    };
  },
  methods: {
    getGirlData() {
      axios.get("http://localhost:3000/").then((response) => {
        this.girlArray = response;
      });
    },
    nextImage() {
      if (this.currentImageIndex == this.girlArray.data.image.length - 1) {
        this.currentImageIndex = 0;
        return;
      }
      this.currentImageIndex++;
    },
  },
  computed: {
    girlLastName() {
      if (this.girlArray.data) {
        const splitedName = this.girlArray.data.name.split(" ");
        return splitedName[splitedName.length - 1];
      }
      return "";
    },
    currentImage() {
      if (this.girlArray.data) {
        return this.girlArray.data.image[this.currentImageIndex];
      }
      return "";
    },
    sliderWidth() {
      if (this.girlArray.data && this.girlArray.data[0].image) {
        const IMAGE_WIDTH = 405;
        const SLIDER_SPACING = 2;
        const numberOfImages = this.girlArray.data[0].image.length;
        return IMAGE_WIDTH / numberOfImages - numberOfImages * SLIDER_SPACING;
      }
    },
  },
  mounted() {
    this.getGirlData();
  },
};
</script>
<style scoped></style>
