<template>
  <div>
    <template v-if="imageNumber == 2">
      <div
        class="w-[198.5px] h-[4px] bg-white rounded-md absolute z-2 top-[1%] left-[5%]"
        id="slide-0"
      ></div>
      <div
        class="w-[198.5px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] right-[5%]"
        id="slide-1"
      ></div>
      <!-- <div
        v-for="(value, objKey, index) in position[2]"
        :class="[
          `
            w-[198.5px] h-[4px] ${
              index == imageIndex ? 'bg-white' : 'bg-slate-300'
            } rounded-md absolute z-2 top-[1%] ${objKey.slice(
            0,
            -1
          )}-[${value}%]
            `,
        ]"
        :key="index"
      ></div> -->
    </template>

    <template v-else-if="imageNumber == 3">
      <div
        class="w-[129px] h-[4px] bg-white rounded-md absolute z-2 top-[1%] left-[5%]"
        id="slide-0"
      ></div>
      <div
        class="w-[129px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] left-[35%]"
        id="slide-1"
      ></div>
      <div
        class="w-[129px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] right-[5%]"
        id="slide-2"
      ></div>

      <!-- <div
        v-for="(value, objKey, index) in position[3]"
        :class="[
          `
            w-[129px] h-[4px] ${
              index == imageIndex ? 'bg-white' : 'bg-slate-300'
            } rounded-md absolute z-2 top-[1%] ${objKey.slice(
            0,
            -1
          )}-[${value}%]
            `,
        ]"
        :key="index"
      ></div> -->
    </template>
    <template v-else-if="imageNumber == 4">
      <div
        class="w-[93.25px] h-[4px] bg-white rounded-md absolute z-2 top-[1%] left-[5%]"
        id="slide-0"
      ></div>
      <div
        class="w-[93.25px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] left-[28%]"
        id="slide-1"
      ></div>
      <div
        class="w-[93.25px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] left-[52%]"
        id="slide-2"
      ></div>
      <div
        class="w-[93.25px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] right-[5%]"
        id="slide-3"
      ></div>
      <!-- <div
        v-for="(value, objKey, index) in position[4]"
        :class="[
          `
            w-[93.25px] h-[4px] ${
              index == imageIndex ? 'bg-white' : 'bg-slate-300'
            } rounded-md absolute z-2 top-[1%] ${objKey.slice(
            0,
            -1
          )}-[${value}%]
            `,
        ]"
        :key="index"
      ></div> -->
    </template>

    <template v-else-if="imageNumber == 5">
      <div
        class="w-[71px] h-[4px] bg-white rounded-md absolute z-2 top-[1%] left-[5%]"
        id="slide-0"
      ></div>
      <div
        class="w-[71px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] left-[23%]"
        id="slide-1"
      ></div>
      <div
        class="w-[71px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] left-[42%]"
        id="slide-2"
      ></div>
      <div
        class="w-[71px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] left-[61%]"
        id="slide-3"
      ></div>
      <div
        class="w-[71px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] right-[5%]"
        id="slide-4"
      ></div>
      <!-- <div
        v-for="(value, objKey, index) in position[5]"
        :class="[
          `
            w-[71px] h-[4px] ${
              index == imageIndex ? 'bg-white' : 'bg-slate-300'
            } rounded-md absolute z-2 top-[1%] ${objKey.slice(
            0,
            -1
          )}-[${value}%]
            `,
        ]"
        :key="index"
      ></div> -->
    </template>

    <template v-else-if="imageNumber === 6">
      <div
        class="w-[55.5px] h-[4px] bg-white rounded-md absolute z-2 top-[1%] left-[5%]"
        id="slide-0"
      ></div>
      <div
        class="w-[55.5px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] left-[20%]"
        id="slide-1"
      ></div>
      <div
        class="w-[55.5px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] left-[35%]"
        id="slide-2"
      ></div>
      <div
        class="w-[55.5px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] left-[50%]"
        id="slide-3"
      ></div>
      <div
        class="w-[55.5px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] left-[65%]"
        id="slide-4"
      ></div>
      <div
        class="w-[55.5px] h-[4px] bg-slate-400 rounded-md absolute z-2 top-[1%] left-[80%]"
        id="slide-5"
      ></div>

      <!-- <div
        v-for="(value, objKey, index) in position[6]"
        :class="[
          `
            w-[55.5px] h-[4px] ${
              index == imageIndex ? 'bg-white' : 'bg-slate-300'
            } rounded-md absolute z-2 top-[1%] ${objKey.slice(
            0,
            -1
          )}-[${value}%]
            `,
        ]"
        :key="index"
      ></div> -->
    </template>
  </div>
</template>

<script>
export default {
  props: ["imageNumber", "imageIndex"],
  data() {
    return {
      position: {
        2: {
          left1: "5",
          right1: "-5",
        },

        3: {
          left1: "5",
          left2: "35",
          right1: "-5",
        },
        4: {
          left1: "5",
          left2: "28",
          left3: "52",
          right1: "-5",
        },
        5: {
          left1: "5",
          left2: "23",
          left3: "42",
          left4: "61",
          right1: "-5",
        },
        6: {
          left1: "5",
          left2: "20",
          left3: "35",
          left4: "50",
          left5: "65",
          left6: "80",
        },
      },
    };
  },
};
</script>

<style></style>
