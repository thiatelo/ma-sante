import {ref} from "vue"

const patient_id = ref(null)


export const usePatientId = () => ({
    patient_id,
})