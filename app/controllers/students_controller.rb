class StudentsController < ApplicationController
  before_action :set_student, only: [:show, :update, :destroy]

  # GET /students
  # def index
  #   @students = Student.all
  #   render json: @students
  # end

  def index
    @dojo = Dojo.find(params[:dojo_id])
    @sensei = Sensei.find(params[:sensei_id])
    @students = Student.where(sensei_id: @sensei.id)
    render json: @students, include: [sensei: {include: :dojo}], status: :ok
  end

  # GET /students/1
  def show
    render json: @student
  end

  # POST /students
  def create
    @student = Student.new(student_params)

    if @student.save
      render json: @student, status: :created, location: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /students/1
  def update
    if @student.update(student_params)
      render json: @student
    else
      render json: @student.errors, status: :unprocessable_entity
    end
  end

  # DELETE /students/1
  def destroy
    @student.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_student
      @student = Student.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def student_params
      params.require(:student).permit(:name, :age, :special_attack, :sensei_id)
    end
end
