<template>
  <div class="checkout_cells">
    <label class="checkout_cell border_bottom" v-for="(item, index) in cells" :key="index" :for="item.labelFor">
      <div class="checkout_cell_hd">
        <input type="checkbox" :name="item.inputName" :id="item.labelFor" :value="item.value" class="not_can_see" v-model="isChecked[index]">
        <i class="icon_check_yes2 checkout_icon_yes1" v-if="isChecked[index] === true"></i>
        <i class="icon_check_no checkout_icon_no" v-else></i>
      </div>
      <div class="checkout_cell_bd">
        <span>{{ item.cellBdName }}</span>
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
          { cellBdName: '选项一', labelFor: 'select1', inputName: 'select', value: 1 },
          { cellBdName: '选项二', labelFor: 'select2', inputName: 'select', value: 2 },
          { cellBdName: '选项三', labelFor: 'select3', inputName: 'select', value: 3 },
        ]
      }
    },
    value: {
      type: Array,
      default: () => {
        return [true, false, false]
      }
    }
  },
  data () {
    return {
      isChecked: this.value
    }
  },
  watch: {
    value (val) {
      this.isChecked = val
    },
    isChecked (newVal) {
      this.$emit('on-change', newVal)
    }
  },
}
</script>

<style>
.checkout_cells {
  width: 90%;
  margin: auto;
}
.checkout_cell {
  padding: 5px 15px 5px 0;
  display: flex;
  position: relative;
}
.checkout_cell::after {
  border-bottom: 1px solid #e5e5e5;
}
.checkout_cell_hd {
  padding-right: 1em;
}
.checkout_cell_bd {
  flex: 1;
  font-size: 14px;
  height: 30px;
  line-height: 30px;
}
.checkout_icon_no {
  height: 30px;
  line-height: 30px;
  font-size: 23px;
  color: #C9C9C9;
}
.checkout_icon_yes1 {
  height: 30px;
  line-height: 30px;
  font-size: 23px;
  color: #09BB07;
}
</style>
