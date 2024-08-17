var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GridFilterTypeEnum;
(function (GridFilterTypeEnum) {
    GridFilterTypeEnum["NAME"] = "NAME";
    GridFilterTypeEnum["FROM_TO"] = "FROM_TO";
    GridFilterTypeEnum["VALUE_SEARCH"] = "VALUE_SEARCH";
})(GridFilterTypeEnum || (GridFilterTypeEnum = {}));
var Filters = /** @class */ (function () {
    function Filters() {
        this.filters = [];
        this.searchValues = [];
    }
    Filters.prototype.applyFiltersValue = function (filters) {
        this.filters = filters;
    };
    Filters.prototype.applySearchValue = function (searchValues) {
        this.searchValues = searchValues;
    };
    return Filters;
}());
var MoviesList = /** @class */ (function (_super) {
    __extends(MoviesList, _super);
    function MoviesList(movies) {
        var _this = _super.call(this) || this;
        _this.movies = movies;
        return _this;
    }
    MoviesList.prototype.search = function () {
        return this.movies;
    };
    MoviesList.prototype.filter = function () {
        return this.movies;
    };
    return MoviesList;
}(Filters));
