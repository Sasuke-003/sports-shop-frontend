import { user }     from "./validations/user.val" ;

export const valid = { user };

export async function validate( validationSchema, dataToBeValidated ) {
    try { await validationSchema.validateAsync( dataToBeValidated ); }
    catch ( err ) {
        const msg = err?.details[0]?.message;

        if( msg ) alert ( msg );
        else { console.log( err ); alert( "Unknown Validation error"); }

        throw err  ;
    }
}
