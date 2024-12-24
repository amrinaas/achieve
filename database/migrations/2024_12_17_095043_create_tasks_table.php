<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('description')->nullable();
            $table->string('image_path')->nullable();
            $table->string('status');
            $table->string('priority');
            $table->string('due_date')->nullable();
            $table->string('assigned_user_id')->constrained('users');
            $table->string('created_by')->constrained('users');
            $table->string('updated_by')->constrained('users');
            $table->foreignId('project_id')->constrained('projects');
            $table->timestamp('completed_at')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            if (Schema::hasColumn('tasks', 'project_id')) {
                $table->dropForeign(['project_id']);
            }
        });
        
        Schema::dropIfExists('tasks');
    }
};
