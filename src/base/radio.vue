<template>
  <div class="radio_cells">
    <label class="radio_cell border_bottom" v-for="(item, index) in cells" :key="index" :for="item.labelFor">
      <div class="radio_cell_bd">
        <!-- <img :src="item.img"> -->
        <span>{{ item.cellBdName }}</span>
      </div>
      <div class="radio_cell_ft">
        <input type="radio" :name="item.inputName" :id="item.labelFor" :value="item.value" class="not_can_see" v-model="checkedValue">
        <i class="icon_check_yes3 radio_icon_yes3" v-if="item.value === checkedValue"></i>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    cells: {
      type: Array,
      default: () => {
        return [
          { cellBdName: '选项一', labelFor: 'option1', inputName: 'option', value: 1 },
          { cellBdName: '选项二', labelFor: 'option2', inputName: 'option', value: 2 },
          { cellBdName: '选项三', labelFor: 'option3', inputName: 'option', value: 3 }
        ]
      }
    },
    value: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      checkedValue: this.value
    }
  },
  watch: {
    value (val) {
      this.checkedValue = val
    },
    checkedValue (newVal) {
      this.$emit('on-change', newVal)
    }
  },
}
</script>

<style>
.radio_cells {
  width: 90%;
  margin: auto;
}
.radio_cell {
  padding: 5px 15px 5px 0;
  display: flex;
  position: relative;
}
.radio_cell::after {
  border-bottom: 1px solid #e5e5e5;
}
.radio_cell_bd {
  flex: 1;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
}
.radio_cell_ft {
  width: 0.4em;
}
.radio_icon_yes3 {
  font-size: 30px;
  color: #09BB07;
}
</style>
