--!strict
--[=[
	@function Flatten
	@within Array

	@param array {T} -- The array to flatten.
	@param depth? number -- The depth to flatten the array to.
	@return {T} -- The flattened array.

	Flattens an array. If depth is not specified, it will flatten
	the array as far as it can go.

	```lua
	local array = {
		{ 1, 2, 3 },
		{ 4, 5, 6 },
		{ 7, { 8, 9 } },
	}

	local new = Flatten(array) -- { 1, 2, 3, 4, 5, 6, 7, 8, 9 }
	local new = Flatten(array, 1) -- { 1, 2, 3, 4, 5, 6, 7, { 8, 9 } }
	```
]=]
local function flatten<T>(array: { T }, depth: number?): { T }
	local result = {}

	depth = if type(depth) == "number" then depth else math.huge

	for _, value in pairs(array) do
		if type(value) == "table" and depth > 0 then
			local nested = flatten(value, depth - 1)

			for _, nestedValue in pairs(nested) do
				table.insert(result, nestedValue)
			end
		else
			table.insert(result, value)
		end
	end

	return result
end

return flatten