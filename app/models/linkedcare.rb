class Linkedcare

	def initialize(linked, care, height, width)
		@lNumber = linked.to_i
		@cNumber = care.to_i
		@height  = height.to_i
		@width	 = width.to_i
	end

	def getText
		space = availableSpace
		result = ''

		while (result.size < space)
      rand   = getRandomInt
      value  = getValueToAdd(rand)
      result += value.to_s
    end

    result
	end

	private

	def getRandomInt
    (1..100).to_a.sample
  end

  def getValueToAdd(input)
      isLinked = (input % @lNumber == 0)
      isCare   = (input % @cNumber == 0)

      if(isLinked && isCare)
        return "linkedcare"
      end
      
      if isLinked
        return "linked"
      end
      if isCare
        return "care"
      end

      input
    end

    #not flexible, simple space calculation for fast processing
    def availableSpace
      lines   = (@height/18).ceil
      columns = (@width/8).ceil

      lines * columns
    end
end