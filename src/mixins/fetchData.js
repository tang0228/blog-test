export default function (defalutDataValue = null) {
    return {
        data() {
            return {
                isLoading: true,
                data: defalutDataValue
            }
        },
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        }
    }
    
}