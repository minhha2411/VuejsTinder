<template>
  <div>
    <template v-if="imageNumber == 2">
      <div
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
      ></div>
    </template>

    <template v-else-if="imageNumber == 3">
      <div
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
      ></div>
    </template>
    <template v-else-if="imageNumber == 4">
      <div
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
      ></div>
    </template>

    <template v-else-if="imageNumber == 5">
      <div
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
      ></div>
    </template>

    <template v-else-if="imageNumber === 6">
      <div
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
      ></div>
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
          right1: "5",
        },
        4: {
          left1: "5",
          left2: "28",
          left3: "52",
          right1: "5",
        },
        5: {
          left1: "5",
          left2: "23",
          left3: "42",
          left4: "61",
          right1: "5",
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
