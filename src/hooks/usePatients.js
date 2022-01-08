import {ref} from "vue"

const patients = ref([])

export const usePatients = () => ({
    patients,
})