/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = nums1.concat(nums2);
    arr.sort(function(a, b) {
        return a - b
    });
    if (arr.length % 2 != 0) {
        return arr[(arr.length - 1) / 2]
    } else {
        var mdeian = arr[arr.length / 2 - 1] + arr[arr.length / 2];
        return mdeian / 2
    }
};