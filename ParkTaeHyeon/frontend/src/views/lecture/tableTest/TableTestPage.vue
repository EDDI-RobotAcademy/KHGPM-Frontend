<template>
    <v-container>
        <v-data-table 
        :headers="headerTitle" 
        :items="contents" 
        :items-per-page="10" 
        class="elevation-1"/>
    </v-container>
</template>

<script>

export default {
    name: "TableTestPage",
    data () {
        return {
            headerTitle: [
                { text: '번호', value: 'boardId', width: "10px" },
                { text: '제목', value: 'title', width: "500px" },
                { text: '작성자', value: 'writer', width: "150px" },
            ],
            contents: [
                { boardId: 1, title: '임산부 비지니스석', writer: '정희정' }, 
                { boardId: 2, title: '술 못먹는 비지니스석', writer: '박태현' }, 
                { boardId: 3, title: '하와이 신혼여행', writer: '박태현' }, 
                { boardId: 4, title: '마우이섬 가즈아', writer: 'thpark1' }, 
                { boardId: 5, title: '엥?', writer: 'j1904106' }, 
                { boardId: 6, title: '렌트카 뭐하지', writer: '1904' }, 
                { boardId: 7, title: '재밌겠네', writer: '1904106' }, 
                { boardId: 8, title: '빅아일랜드 가즈아', writer: 'jfly@jejuair.net' }, 
                { boardId: 9, title: '재밌겠다', writer: 'thpark1' }, 
                { boardId: 10, title: '오하우섬 시끄럽겠지', writer: 'jskim2' }, 
                { boardId: 11, title: '흠', writer: 'hjjung1' }, 
                { boardId: 12, title: '비행기 예약 잘해야됨', writer: '허츠' }, 
                { boardId: 13, title: '숙소 예약 꼼꼼하게', writer: '에어비앤비' }, 
            ]
        }
    }
}
</script>
