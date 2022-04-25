--!strict
local Sift = script.Parent.Parent

local Util = require(Sift.Util)

--[=[
	@function Count
	@within Array

	@param array {T} -- The array to count the number of items in.
	@param predicate? (value?: T, index?: number) -> boolean? -- The predicate to use to filter the array.
	@return number -- The number of items in the array.

	Counts the number of items in an array.

	```lua
	local array = { 1, 2, 3 }

	local value = Count(array) -- 3
	local value = Count(array, function(item, index)
		return item == 2
	end) -- 1
	```
]=]
local function count<T>(array: { T }, predicate: ((T, number) -> boolean?)?): number
	local counter = 0

	predicate = if type(predicate) == "function" then predicate else Util.Func.Truthy

	for index, value in ipairs(array) do
		if predicate(value, index) then
			counter += 1
		end
	end

	return counter
end

return count