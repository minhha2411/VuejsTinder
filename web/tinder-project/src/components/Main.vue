<template>
  <div class="w-[25%] mx-auto mt-8">
    <!-- Header -->
    <a-row>
      <a-col class="w-[90%] mx-auto my-4">
        <a-typography
          ><font-awesome-icon icon="fa-brands fa-sketch" /> Tinder
        </a-typography>
      </a-col>
    </a-row>
    <!-- Content -->
    <a-col>
      <div id="bg-img">
        <div
          class="w-[180px] h-[6px] bg-pink-400 rounded-md absolute z-2 top-[1%] left-[5%]"
        ></div>
        <div
          class="w-[180px] h-[6px] bg-white rounded-md absolute z-2 top-[1%] right-[5%]"
        ></div>
        <a-col
          class="absolute z-2 top-[50%] left-[5%] text-white flex content-center"
        >
          <div class="text-4xl text-white mr-2">Thao</div>
          <div class="text-xl relative translate-y-[30%]">19</div>
          <font-awesome-icon
            icon="fa-regular fa-circle-question"
            class="text-md relative translate-x-[50%] translate-y-[150%]"
          />
        </a-col>
        <a-col class="absolute z-2 top-[52%] left-[5%] flex">
          <div
            class="w-[10px] h-[10px] rounded-[50%] bg-green-300 translate-y-[100%] mr-2"
          ></div>
          <div class="text-lg text-white mr-2">Có Hoạt Động Gần Đây</div>
        </a-col>
        <a-col class="absolute z-2 top-[52%] left-[5%] flex">
          <font-awesome-icon
            icon="fa-solid fa-map-location-dot"
            class="text-md relative translate-x-[5%] translate-y-[100%] text-white mr-2"
          />
          <div
            class="text-lg text-white mr-2 translate-x-[10%] translate-y-[30%]"
          >
            Cách xa 1km
          </div>
        </a-col>

        <a-col class="absolute z-2 top-[70%] left-[20%] flex">
          <div
            class="w-[50px] h-[50px] rounded-[50%] mr-2 border-[1px] border-red-500 cursor-pointer"
          >
            <font-awesome-icon
              icon="fa-solid fa-xmark"
              class="text-md relative text-white mr-2 translate-x-[75%] translate-y-[35%]"
              size="2xl"
              :style="{ color: 'rgb(239 ,68, 68)' }"
            />
          </div>

          <div
            class="w-[50px] h-[50px] rounded-[50%] mr-2 border-[1px] border-cyan-400 translate-x-[75%] cursor-pointer"
          >
            <font-awesome-icon
              icon="fa-regular fa-star"
              class="text-md relative text-white mr-2 translate-x-[45%] translate-y-[55%]"
              size="xl"
              :style="{ color: 'rgb(34 ,211, 238 )' }"
            />
          </div>

          <div
            class="w-[50px] h-[50px] rounded-[50%] mr-2 border-[1px] border-green-400 translate-x-[155%] cursor-pointer"
          >
            <font-awesome-icon
              icon="fa-regular fa-heart"
              class="text-md relative text-white mr-2 translate-x-[55%] translate-y-[65%]"
              size="xl"
              :style="{ color: 'rgb(74 ,222, 128 )' }"
            />
          </div>
        </a-col>
      </div>
    </a-col>

    <!-- Toolbar -->
    <a-row> </a-row>
  </div>
</template>

<script>
export default {};
</script>
<style scoped></style>
