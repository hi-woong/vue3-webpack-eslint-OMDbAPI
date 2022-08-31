<template>
  <div class="container">
    <input
      v-model="title"
      class="form-control"
      type="text"
      placeholder="Search for Movies, Series & more" />
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name === 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            type: 'movie',
            number: 10,
            year: '',
            filters: [
                // 선택할 카테고리 데이터 
                {
                    name: 'type',
                    items: ['movie','series','episode']
                },
                // 출력할 갯수를 정할 select 데이터
                {
                    name: 'number',
                    items: [10,20,30]
                },
                // 출시년도 를 선택할 select 데이터 
                // 즉시 실행 함수를 통해  그안에서 반복문을 이용하여 
                // 자바의 Date 함수 이용!
                // 2022 부터 1씩 감소 하면서 1985  까지  빈 배열에 하나씩
                // 담아준다 그후 담겨진 배열을 반환
                {
                    name: 'year',
                    items: (() => {
                        const years =[]
                        const thisYear = new Date().getFullYear()
                        for (let i = thisYear; i >= 1985; i -= 1){
                            years.push(i)
                        }
                        return years
                    })()
                },
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    .container{
        display: flex;
        > * {
            margin-right: 10px;
            font-size: 15px;
            &:last-child{
                margin-right: 0;
            }
        }
        .selects{
            display:flex;
            select {
                width: 120px;
                 margin-right: 10px;
                 &:last-child{
                     margin-right: 0;
                 }
            }
        }
    }

</style>