return function()
	local Concat = require(script.Parent.concat)

	it("should join multiple arrays together into a single array", function()
		local table1 = { 1, 2, 3 }
		local table2 = { 4, 5, 6 }

		local new = Concat(table1, table2)

		expect(new).to.be.a("table")

		expect(new[1]).to.equal(1)
		expect(new[2]).to.equal(2)
		expect(new[3]).to.equal(3)
		expect(new[4]).to.equal(4)
		expect(new[5]).to.equal(5)
		expect(new[6]).to.equal(6)
	end)

	it("should return an empty array if no arrays are given", function()
		local new = Concat()

		expect(new).to.be.a("table")
		expect(#new).to.equal(0)
	end)

	it("should not copy the nested arrays", function()
		local table1 = { 1, 2, { 3, 4 } }
		local table2 = { 5, 6, { 7, 8 } }

		local new = Concat(table1, table2)

		expect(new).to.be.a("table")

		expect(new[1]).to.equal(1)
		expect(new[2]).to.equal(2)
		expect(new[3]).to.equal(table1[3])
		expect(new[4]).to.equal(5)
		expect(new[5]).to.equal(6)
		expect(new[6]).to.equal(table2[3])
	end)
end
