import {observable, action, computed} from 'mobx'

class PersonStore {
    @observable 
    public loading: boolean = false

    @action
    public showLoading = (loading:boolean) => {
        this.loading = loading
    }

    @computed
    get loadingText () {
        return this.loading ? '显示' : '隐藏'
    }
}

const personStore = new PersonStore()

export default personStore