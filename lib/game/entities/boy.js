ig.module( 
	'game.entities.boy' 
)
.requires(
	'impact.entity'
)
.defines(function(){

EntityBoy = ig.Entity.extend({
	
	maxVel: {x: 200, y: 500},
	jump: 300,
	
	size:{x:32,y:64},
	collides: ig.Entity.COLLIDES.ACTIVE,
	
	    // Load an animation sheet
    animSheet: new ig.AnimationSheet( 'media/boy.png', 32, 64 ),
	
	
	update: function() {
        // This method is called for every frame on each entity.
        // React to input, or compute the entity's AI here.
        
        if( ig.input.state('left') ) {
            this.vel.x = -200;
            this.currentAnim = this.anims.left;
        } else if( ig.input.state('right') ) {
            this.vel.x = 200;
            this.currentAnim = this.anims.right;
        } else {
	        this.vel.x = 0;  
            this.currentAnim = this.anims.idle;
        }
        // ig.input.pressed('jump')
        if( this.standing && ig.input.pressed('jump') ) {
			this.vel.y = -this.jump;
		}
        
        // Call the parent update() method to move the entity
        // according to its physics
        this.parent(); 
    },
	
	init: function( x, y, settings ) {
        // Add animations for the animation sheet
        this.addAnim( 'idle', 0.1, [0] );
        this.addAnim( 'right', 0.1, [1,2] );
        this.addAnim( 'left', 0.1, [3,4] );
        
        
        this.currentAnim = this.anims.idle;
        
        // Call the parent constructor
        this.parent( x, y, settings );
    }
	
	


});


});