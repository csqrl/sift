--[=[
	@class Array

	Array is a submodule of Sift. It provides a number of functions for
	manipulating arrays.
]=]
local Array = {
	At = require(script.At),
	Concat = require(script.Concat),
	ConcatDeep = require(script.ConcatDeep),
	Copy = require(script.Copy),
	CopyDeep = require(script.CopyDeep),
	Count = require(script.Count),
	Create = require(script.Create),
	Equals = require(script.Equals),
	EqualsDeep = require(script.EqualsDeep),
	Every = require(script.Every),
	Filter = require(script.Filter),
	Find = require(script.Find),
	FindLast = require(script.FindLast),
	FindWhere = require(script.FindWhere),
	FindWhereLast = require(script.FindWhereLast),
	First = require(script.First),
	Flatten = require(script.Flatten),
	Freeze = require(script.Freeze),
	FreezeDeep = require(script.FreezeDeep),
	Includes = require(script.Includes),
	Last = require(script.Last),
	Map = require(script.Map),
	Pop = require(script.Pop),
	Push = require(script.Push),
	Reduce = require(script.Reduce),
	ReduceRight = require(script.ReduceRight),
	RemoveIndex = require(script.RemoveIndex),
	RemoveIndices = require(script.RemoveIndices),
	RemoveValue = require(script.RemoveValue),
	RemoveValues = require(script.RemoveValues),
	Reverse = require(script.Reverse),
	Set = require(script.Set),
	Shift = require(script.Shift),
	Shuffle = require(script.Shuffle),
	Slice = require(script.Slice),
	Some = require(script.Some),
	Sort = require(script.Sort),
	Splice = require(script.Splice),
	ToSet = require(script.ToSet),
	Unshift = require(script.Unshift),
	Update = require(script.Update),
	Zip = require(script.Zip),
	ZipAll = require(script.ZipAll),
}

-- Aliases --
Array.Contains = Array.Includes

return Array