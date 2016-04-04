class LinkedcareController < ApplicationController

	def index
		if params.size > 2
			@lnumber = params['lnumber']
			@cnumber = params['cnumber']
			linkedcare = Linkedcare.new(@lnumber, 
																	@cnumber,
																	params['height'],
																	params['width'])
			@results = linkedcare.getText

			render 'index'
		end
	end

end
