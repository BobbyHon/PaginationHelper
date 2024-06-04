class PaginationHelper {
	constructor(collection, itemsPerPage) {
    this.collection = collection
    this.itemsPerPage = itemsPerPage
	}
	itemCount() {
    return this.collection.length
	}
	pageCount() {
    return Math.ceil(this.itemCount() / this.itemsPerPage)
	}
	pageItemCount(pageIndex) {
    if (pageIndex < 0 || pageIndex > this.pageCount() - 1 || this.itemCount() == 0) return -1
    else if (pageIndex + 1 == this.pageCount() && this.itemCount() % this.itemsPerPage != 0) return this.itemCount() % this.itemsPerPage
    else return this.itemsPerPage
	}
	pageIndex(itemIndex) {
    if (itemIndex < 0 || itemIndex > this.itemCount() - 1 || this.itemCount() == 0) return -1
    else return Math.floor(itemIndex / this.itemsPerPage)
    }