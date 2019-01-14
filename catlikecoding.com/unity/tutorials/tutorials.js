$(function() {
	var dark = localStorage.getItem('theme') === 'dark';
	$('body').append('<div id="theme-switcher">switch theme</div>');
	var themeSwitcher = $('#theme-switcher');
	if (dark) {
		$('body').addClass('dark');
	}
	themeSwitcher.click(function() {
		$('body').toggleClass('dark');
		if (dark) {
			localStorage.removeItem('theme');
		}
		else {
			localStorage.setItem('theme', 'dark');
		}
		dark = !dark;
	});
});


var customTypes = customTypes || {};

var styles = {
	keyword: function(word) {
		return '<b class="keyword">' + word + '</b>';
	},
	type: function(word) {
		return '<b class="type">' + word + '</b>';
	},
	directive: function(word) {
		return '<span class="directive">' + word + '</span>';
	},
	unityAttribute: function(word) {
		return '<a class="unity-type" href="http://docs.unity3d.com/Documentation/ScriptReference/' + word + 'Attribute.html">' + word + '</a>';
	},
	unityType: function(word) {
		return '<a class="unity-type" href="http://docs.unity3d.com/Documentation/ScriptReference/' + word + '.html">' + word + '</a>';
	},
	unityTypeUI: function(word) {
		return '<a class="unity-type" href="http://docs.unity3d.com/Documentation/ScriptReference/UI.' + word + '.html">' + word + '</a>';
	},
	unityTypeEventSystems: function(word) {
		return '<a class="unity-type" href="http://docs.unity3d.com/Documentation/ScriptReference/EventSystems.' + word + '.html">' + word + '</a>';
	},
	unityMethod: function(containingType) {
		return function(word) {
			return '<a class="unity-method" href="http://docs.unity3d.com/Documentation/ScriptReference/' + containingType + "." + word + '.html">' + word + '</a>';
		}
	},
	unityNestedType: function(containingType) {
		return function(word) {
			return '<a class="unity-type" href="http://docs.unity3d.com/Documentation/ScriptReference/' + containingType + "." + word + '.html">' + word + '</a>';
		}
	},
	msdnType: function(word) {
		return '<a class="msdn-type" href="http://social.msdn.microsoft.com/search/en-us?query=' + word + '">' + word + '</a>';
	},
	msdnAtttributeType: function(word) {
		return '<a class="msdn-type" href="http://social.msdn.microsoft.com/search/en-us?query=' + word + 'Attribute">' + word + '</a>';
	},
	cgFunction: function(word) {
		return '<a class="cg-function" href="http://developer.download.nvidia.com/cg/' + word + '.html">' + word + '</a>';
	},
	hlslFunction: function(word) {
		return '<a class="cg-function" href="http://social.msdn.microsoft.com/search/en-us?query=' + word + '%20hlsl">' + word + '</a>';
	},
	unityMacro: function(word) {
		return '<b class="cg-macro">' + word + '</b>';
	},
};

var cSharpStyles = {
	'abstract': styles.keyword,
	'as': styles.keyword,
	base: styles.keyword,
	'break': styles.keyword,
	'case': styles.keyword,
	'class': styles.keyword,
	'const': styles.keyword,
	'continue': styles.keyword,
	'delegate': styles.keyword,
	'default': styles.keyword,
	'else': styles.keyword,
	'enum': styles.keyword,
	'event': styles.keyword,
	'false': styles.keyword,
	'finally': styles.keyword,
	'for': styles.keyword,
	'foreach': styles.keyword,
	get: styles.keyword,
	'goto': styles.keyword,
	'if': styles.keyword,
	'in': styles.keyword,
	internal: styles.keyword,
	is: styles.keyword,
	namespace: styles.keyword,
	'new': styles.keyword,
	'null': styles.keyword,
	operator: styles.keyword,
	'out': styles.keyword,
	'override': styles.keyword,
	'private': styles.keyword,
	'protected': styles.keyword,
	'public': styles.keyword,
	readonly: styles.keyword,
	ref: styles.keyword,
	'return': styles.keyword,
	sealed: styles.keyword,
	set: styles.keyword,
	static: styles.keyword,
	'struct': styles.keyword,
	'switch': styles.keyword,
	'using': styles.keyword,
	'this': styles.keyword,
	'throw': styles.keyword,
	'true': styles.keyword,
	'try': styles.keyword,
	'typeof': styles.keyword,
	'var': styles.keyword,
	virtual: styles.keyword,
	'void': styles.keyword,
	'where': styles.keyword,
	'while': styles.keyword,
	'yield': styles.keyword,

	'bool': styles.type,
	byte: styles.type,
	'char': styles.type,
	'double': styles.type,
	'float': styles.type,
	'int': styles.type,
	'string': styles.type,

	Application: styles.unityType,
	AssetDatabase: styles.unityType,
	AsyncOperation: styles.unityType,
	BlendMode: styles.unityType,
	Bounds: styles.unityType,
	BoxCollider: styles.unityType,
	Canvas: styles.unityType,
	Camera: styles.unityType,
	CameraClearFlags: styles.unityType,
	CanEditMultipleObjects: styles.unityType,
	CapsuleCollider: styles.unityType,
	SphereCollider: styles.unityType,
	Collider: styles.unityType,
	Color: styles.unityType,
	ColorPickerHDRConfig: styles.unityType,
	Color32: styles.unityType,
	CustomEditor: styles.unityType,
	CustomPropertyDrawer: styles.unityType,
	Debug: styles.unityType,
	DynamicGI: styles.unityType,
	Editor: styles.unityType,
	EditorGUI: styles.unityType,
	EditorGUIUtility: styles.unityType,
	EditorGUILayout: styles.unityType,
	EditorStyles: styles.unityType,
	EditorUtility: styles.unityType,
	ExecuteInEditMode: styles.unityType,
	FocusType: styles.unityType,
	ImageEffectAllowedInSceneView: styles.unityType,
	Event: styles.unityType,
	EventSystem: styles.unityTypeEventSystems,
	EventType: styles.unityType,
	ForceMode: styles.unityType,
	GameObject: styles.unityType,
	Gizmos: styles.unityType,
	Gradient: styles.unityType,
	GUI: styles.unityType,
	GUIContent: styles.unityType,
	GUILayout: styles.unityType,
	GUILayoutOption: styles.unityType,
	GUIStyle: styles.unityType,
	GUIText: styles.unityType,
	GUIUtility: styles.unityType,
	Handles: styles.unityType,
	HideFlags: styles.unityType,
	Image: styles.unityTypeUI,
	ImageEffectOpaque: styles.unityType,
	Input: styles.unityType,
	InputField: styles.unityType,
	Light: styles.unityType,
	LightShadows: styles.unityType,
	LightType: styles.unityType,
	KeyCode: styles.unityType,
	Material: styles.unityType,
	MaterialEditor: styles.unityType,
	MaterialProperty: styles.unityType,
	Mathf: styles.unityType,
	Matrix4x4: styles.unityType,
	MenuItem: styles.unityType,
	Mesh: styles.unityType,
	MeshCollider: styles.unityType,
	MeshFilter: styles.unityType,
	MeshRenderer: styles.unityType,
	MessageType: styles.unityType,
	
	MonoBehaviour: styles.unityType,
	
	Awake: styles.unityMethod('MonoBehaviour'),
	Start: styles.unityMethod('MonoBehaviour'),
	OnEnable: styles.unityMethod('MonoBehaviour'),
	OnDisable: styles.unityMethod('MonoBehaviour'),
	OnDestroy: styles.unityMethod('MonoBehaviour'),
	OnDrawGizmos: styles.unityMethod('MonoBehaviour'),
	OnLevelWasLoaded: styles.unityMethod('MonoBehaviour'),
	OnRenderImage: styles.unityMethod('MonoBehaviour'),
	OnTriggerEnter: styles.unityMethod('MonoBehaviour'),
	FixedUpdate: styles.unityMethod('MonoBehaviour'),
	Update: styles.unityMethod('MonoBehaviour'),
	LateUpdate: styles.unityMethod('MonoBehaviour'),
	
	Object: styles.unityType,
	
	CreateAssetMenu: styles.unityAttribute,
	DisallowMultipleComponent: styles.unityType,
	DontDestroyOnLoad: styles.unityMethod('Object'),
	Instantiate: styles.unityMethod('Object'),
	Destroy: styles.unityMethod('Object'),
	FindObjectsOfType: styles.unityMethod('Object'),
	GetComponent: styles.unityMethod('Component'),
	GetComponentInChildren: styles.unityMethod('Component'),
	GetComponentsInChildren: styles.unityMethod('Component'),
	
	CameraType: styles.unityType,
	Graphics: styles.unityType,
	HideInInspector: styles.unityType,
	JsonUtility: styles.unityType,
	MaterialGlobalIlluminationFlags: styles.unityType,
	MaterialPropertyBlock: styles.unityType,
	ParticleSystem: styles.unityType,
	Particle: styles.unityType,
	ParticleEmitter: styles.unityType,
	Physics: styles.unityType,
	PhysicMaterial: styles.unityType,
	PivotRotation: styles.unityType,
	PlayerPrefs: styles.unityType,
	PrefabUtility: styles.unityType,
	PrefabType: styles.unityType,
	PropertyAttribute: styles.unityType,
	PropertyDrawer: styles.unityType,
	Quaternion: styles.unityType,
	Random: styles.unityType,
	Range: styles.unityAttribute,
	Ray: styles.unityType,
	RaycastHit: styles.unityType,
	Rect: styles.unityType,
	RenderQueue: styles.unityType,
	Renderer: styles.unityType,
	RenderTexture: styles.unityType,
	RenderTextureFormat: styles.unityType,
	RequireComponent: styles.unityType,
	Rigidbody: styles.unityType,
	LoadSceneMode: styles.unityNestedType('SceneManagement'),
	Scene: styles.unityNestedType('SceneManagement'),
	SceneManager: styles.unityNestedType('SceneManagement'),
	Screen: styles.unityType,
	ScriptableObject: styles.unityType,
	ScriptableWizard: styles.unityType,
	Selection: styles.unityType,
	SelectionBase: styles.unityType,
	SerializeField: styles.unityType,
	SerializedObject: styles.unityType,
	SerializedProperty: styles.unityType,
	Shader: styles.unityType,
	ShaderGUI: styles.unityType,
	ShaderIncludePath: styles.unityAttribute,
	Slider: styles.unityNestedType('UI'),
	State: styles.unityNestedType('Random'),
	SystemInfo: styles.unityType,
	Texture: styles.unityType,
	Texture2D: styles.unityType,
	Texture2DArray: styles.unityType,
	Text: styles.unityTypeUI,
	FilterMode: styles.unityType,
	TextureFormat: styles.unityType,
	TextureWrapMode: styles.unityType,
	Tools: styles.unityType,
	
	RectTransform: styles.unityType,
	Transform: styles.unityType,
	
	Undo: styles.unityType,
	Vector2: styles.unityType,
	Vector3: styles.unityType,
	Vector4: styles.unityType,
	WaitForSeconds: styles.unityType,
	
	ClearFlag: styles.unityNestedType('Experimental.Rendering'),
	CommandBuffer: styles.unityNestedType('Rendering'),
	CoreUtils: styles.unityNestedType('Experimental.Rendering'),
	CullResults: styles.unityNestedType('Experimental.Rendering'),
	DrawRendererFlags: styles.unityNestedType('Experimental.Rendering'),
	DrawRendererSettings: styles.unityNestedType('Experimental.Rendering'),
	DrawRendererSortSettings: styles.unityNestedType('Experimental.Rendering'),
	DrawShadowsSettings: styles.unityNestedType('Experimental.Rendering'),
	FilterRenderersSettings: styles.unityNestedType('Experimental.Rendering'),
	IRenderPipeline: styles.unityNestedType('Experimental.Rendering'),
	RenderBufferLoadAction: styles.unityNestedType('Rendering'),
	RenderBufferStoreAction: styles.unityNestedType('Rendering'),
	RendererConfiguration: styles.unityNestedType('Experimental.Rendering'),
	RenderPipeline: styles.unityNestedType('Experimental.Rendering'),
	RenderPipelineAsset: styles.unityNestedType('Experimental.Rendering'),
	RenderQueueRange: styles.unityNestedType('Experimental.Rendering'),
	RenderTexture: styles.unityType,
	ScriptableCullingParameters: styles.unityNestedType('Experimental.Rendering'),
	ScriptableRenderContext: styles.unityNestedType('Experimental.Rendering'),
	ShaderPassName: styles.unityNestedType('Experimental.Rendering'),
	ShadowSplitData: styles.unityNestedType('Experimental.Rendering'), 
	SortFlags: styles.unityNestedType('Experimental.Rendering'),
	VisibleLight: styles.unityNestedType('Experimental.Rendering'),

	Array: styles.msdnType,
	ArrayList: styles.msdnType,
	BinaryFormatter: styles.msdnType,
	BinaryReader: styles.msdnType,
	BinaryWriter: styles.msdnType,
	Conditional: styles.msdnAtttributeType,
	DateTime: styles.msdnType,
	Directory: styles.msdnType,
	File: styles.msdnType,
	FileMode: styles.msdnType,
	Flags: styles.msdnType,
	IDisposable: styles.msdnType,
	IEnumerator: styles.msdnType,
	InvalidOperationException: styles.msdnType,
	List: styles.msdnType,
	Path: styles.msdnType,
	MemoryStream: styles.msdnType,
	NonSerialized: styles.msdnType,
	Queue: styles.msdnType,
	Serializable: styles.msdnType,
	Stack: styles.msdnType,
	Stopwatch : styles.msdnType,
	Stream: styles.msdnType,
	StringBuilder: styles.msdnType,
	Time: styles.msdnType,
	TimeSpan: styles.msdnType
};

var shaderStyles = {
	cbuffer: styles.keyword,
	const: styles.keyword,
	frac: styles.keyword,
	'if': styles.keyword,
	'else': styles.keyword,
	'for': styles.keyword,
	'while': styles.keyword,
	in: styles.keyword,
	inline: styles.keyword,
	inout: styles.keyword,
	out: styles.keyword,
	return: styles.keyword,
	static: styles.keyword,
	struct: styles.keyword,
	void: styles.keyword,
	uniform: styles.keyword,
	x: styles.keyword,
	xx: styles.keyword,
	xxxx: styles.keyword,
	xxxy: styles.keyword,
	xxyy: styles.keyword,
	xw: styles.keyword,
	xy: styles.keyword,
	xyxx: styles.keyword,
	xyxy: styles.keyword,
	xyz: styles.keyword,
	xyzx: styles.keyword,
	xyzw: styles.keyword,
	xyzz: styles.keyword,
	y: styles.keyword,
	yx: styles.keyword,
	yyyy: styles.keyword,
	yz: styles.keyword,
	yzx: styles.keyword,
	yzww: styles.keyword,
	yzzx: styles.keyword,
	xz: styles.keyword,
	xzy: styles.keyword,
	w: styles.keyword,
	wwww: styles.keyword,
	z: styles.keyword,
	zxy: styles.keyword,
	zyx: styles.keyword,
	zw: styles.keyword,
	zwzz: styles.keyword,
	zy: styles.keyword,
	zzzw: styles.keyword,
	zzzz: styles.keyword,
	r: styles.keyword,
	rr: styles.keyword,
	rrrr: styles.keyword,
	g: styles.keyword,
	b: styles.keyword,
	a: styles.keyword,
	rg: styles.keyword,
	rgb: styles.keyword,
	rgba: styles.keyword,
	
	bool: styles.type,
	'false': styles.type,
	half: styles.type,
	int: styles.type,
	fixed: styles.type,
	float: styles.type,
	half2: styles.type,
	fixed2: styles.type,
	float2: styles.type,
	float2x2: styles.type,
	half3: styles.type,
	fixed3: styles.type,
	float3: styles.type,
	float3x3: styles.type,
	float4x4: styles.type,
	half4: styles.type,
	fixed4: styles.type,
	float4: styles.type,
	real: styles.type,
	real2: styles.type,
	sampler2D: styles.type,
	sampler3D: styles.type,
	samplerCUBE: styles.type,
	'true': styles.type,
	uint: styles.type,
	
	CGINCLUDE: styles.directive,
	CGPROGRAM: styles.directive,
	ENDCG: styles.directive,
	
	HLSLPROGRAM: styles.directive,
	ENDHLSL: styles.directive,
	
	Color: styles.type,
	CustomEditor: styles.type,
	Float: styles.type,
	FallBack: styles.type,
	GrabPass: styles.type,
	KeywordEnum : styles.type,
	LOD: styles.type,
	Properties: styles.type,
	Range: styles.type,
	Shader: styles.type,
	Stencil: styles.type,
	SubShader: styles.type,
	Pass: styles.type,
	Tags: styles.type,
	Input: styles.type,
	SurfaceOutputStandard: styles.type,
	SurfaceOutputStandardSpecular: styles.type,
	appdata_full: styles.type,
	
	Always: styles.type,
	Blend: styles.type,
	CompBack: styles.type,
	CompFront: styles.type,
	Cull: styles.type,
	DstColor: styles.type,
	Equal: styles.type,
	One: styles.type,
	OneMinusSrcAlpha: styles.type,
	ReadMask: styles.type,
	Ref: styles.type,
	SrcAlpha: styles.type,
	Zero: styles.type,
	ZTest: styles.type,
	
	ZWrite: styles.type,
	Off: styles.type,
	
	Offset: styles.type,
	
	FragmentOutput: styles.type,
	Interpolators: styles.type,
	InterpolatorsVertex: styles.type,
	InterpolatorsGeometry: styles.type,
	UnityIndirect: styles.type,
	UnityMetaInput: styles.type,
	UnityLight: styles.type,
	Unity_GlossyEnvironmentData: styles.type,
	VertexData: styles.type,
	TessellationControlPoint: styles.type,
	TessellationFactors: styles.type,
	
	VertexInput: styles.type,
	VertexOutput: styles.type,
	
	abs: styles.cgFunction,
	clamp: styles.cgFunction,
	clip: styles.cgFunction,
	cross: styles.cgFunction,
	distance: styles.cgFunction,
	ddx: styles.cgFunction,
	ddy: styles.cgFunction,
	dot: styles.cgFunction,
	exp2: styles.cgFunction,
	floor: styles.cgFunction,
	fwidth: styles.cgFunction,
	length: styles.cgFunction,
	lerp: styles.cgFunction,
	log2: styles.cgFunction,
	max: styles.cgFunction,
	min: styles.cgFunction,
	mul: styles.cgFunction,
	normalize: styles.cgFunction,
	pow: styles.cgFunction,
	reflect: styles.cgFunction,
	rsqrt: styles.cgFunction,
	saturate: styles.cgFunction,
	sin: styles.cgFunction,
	cos: styles.cgFunction,
	smoothstep: styles.cgFunction,
	sqrt: styles.cgFunction,
	tex2D: styles.cgFunction,
	tex2Dbias: styles.cgFunction,
	tex2Dlod: styles.cgFunction,
	tex2Dproj: styles.cgFunction,
	tex3D: styles.unityMacro,
	texCUBE: styles.cgFunction,
	texCUBEbias: styles.cgFunction,
	transpose: styles.cgFunction,
	
	maxvertexcount: styles.hlslFunction,
	Append: styles.hlslFunction,
	
	UNITY_domain: styles.hlslFunction,
	UNITY_outputcontrolpoints: styles.hlslFunction,
	UNITY_outputtopology: styles.hlslFunction,
	UNITY_partitioning: styles.hlslFunction,
	UNITY_patchconstantfunc: styles.hlslFunction,
	
	triangle: styles.msdnType,
	
	InputPatch: styles.msdnType,
	OutputPatch: styles.msdnType,
	TriangleStream: styles.msdnType,
	
	CBUFFER_START: styles.unityMacro,
	CBUFFER_END: styles.unityMacro,
	INTERNALTESSPOS: styles.unityMacro,
	LIGHTING_COORDS: styles.unityMacro,
	POSITION: styles.unityMacro,
	NORMAL: styles.unityMacro,
	SAMPLE_DEPTH_TEXTURE: styles.unityMacro,
	SAMPLE_TEXTURE2D_SHADOW: styles.unityMacro,
	SAMPLER: styles.unityMacro,
	SAMPLER_CMP: styles.unityMacro,
	SHADOW_ATTENUATION: styles.unityMacro,
	SHADOW_COORDS: styles.unityMacro,
	SV_DomainLocation: styles.unityMacro,
	SV_InsideTessFactor: styles.unityMacro,
	SV_OutputControlPointID: styles.unityMacro,
	SV_POSITION: styles.unityMacro,
	SV_TARGET: styles.unityMacro,
	SV_Target: styles.unityMacro,
	SV_Target0: styles.unityMacro,
	SV_Target1: styles.unityMacro,
	SV_Target2: styles.unityMacro,
	SV_Target3: styles.unityMacro,
	SV_TessFactor: styles.unityMacro,
	TANGENT: styles.unityMacro,
	TEXCOORD0: styles.unityMacro,
	TEXCOORD1: styles.unityMacro,
	TEXCOORD2: styles.unityMacro,
	TEXCOORD3: styles.unityMacro,
	TEXCOORD4: styles.unityMacro,
	TEXCOORD5: styles.unityMacro,
	TEXCOORD6: styles.unityMacro,
	TEXCOORD7: styles.unityMacro,
	TEXCOORD8: styles.unityMacro,
	TEXCOORD9: styles.unityMacro,
	TEXTURE2D: styles.unityMacro,
	TEXTURE2D_SHADOW: styles.unityMacro,
	TRANSFER_SHADOW: styles.unityMacro,
	TRANSFER_VERTEX_TO_FRAGMENT: styles.unityMacro,
	TRANSFORM_TEX: styles.unityMacro,
	UNITY_ACCESS_INSTANCED_PROP: styles.unityMacro,
	UNITY_ARGS_TEXCUBE: styles.unityMacro,
	UNITY_ATTEN_CHANNEL: styles.unityMacro,
	UNITY_BRANCH: styles.unityMacro,
	UNITY_BRDF_PBS: styles.unityMacro,
	UNITY_CALC_FOG_FACTOR: styles.unityMacro,
	UNITY_CALC_FOG_FACTOR_RAW: styles.unityMacro,
	UNITY_DECLARE_DEPTH_TEXTURE: styles.unityMacro,
	UNITY_DECLARE_TEX2D: styles.unityMacro,
	UNITY_DECLARE_TEX2DARRAY: styles.unityMacro,
	UNITY_DEFINE_INSTANCED_PROP: styles.unityMacro,
	UNITY_INITIALIZE_OUTPUT: styles.unityMacro,
	UNITY_INSTANCED_ARRAY_SIZE: styles.unityMacro,
	UNITY_INSTANCING_BUFFER_START: styles.unityMacro,
	UNITY_INSTANCING_BUFFER_END: styles.unityMacro,
	UNITY_INSTANCING_CBUFFER_END: styles.unityMacro,
	UNITY_INSTANCING_CBUFFER_START: styles.unityMacro,
	UNITY_VERTEX_INPUT_INSTANCE_ID: styles.unityMacro,
	UNITY_LIGHT_ATTENUATION: styles.unityMacro,
	UNITY_MATRIX_M: styles.unityMacro,
	UNITY_MATRIX_MVP: styles.unityMacro,
	UNITY_MATRIX_V: styles.unityMacro,
	UNITY_PASS_TEXCUBE: styles.unityMacro,
	UNITY_PASS_TEXCUBE_SAMPLER: styles.unityMacro,
	UNITY_SAMPLE_TEX2D: styles.unityMacro,
	UNITY_SAMPLE_TEX2D_SAMPLER: styles.unityMacro,
	UNITY_SAMPLE_TEX3D_SAMPLER: styles.unityMacro,
	UNITY_SAMPLE_TEXCUBE: styles.unityMacro,
	UNITY_SAMPLE_TEXCUBE_LOD: styles.unityMacro,
	UNITY_SAMPLE_TEX2DARRAY: styles.unityMacro,
	UNITY_SETUP_INSTANCE_ID: styles.unityMacro,
	UNITY_SHADOW_COORDS: styles.unityMacro,
	UNITY_SPECCUBE_BLENDING: styles.unityMacro,
	UNITY_SPECCUBE_BOX_PROJECTION: styles.unityMacro,
	UNITY_SPECCUBE_LOD_STEPS: styles.unityMacro,
	UNITY_TRANSFER_INSTANCE_ID: styles.unityMacro,
	UNITY_TRANSFER_SHADOW: styles.unityMacro,
	UNITY_UNROLL: styles.unityMacro,
	UNITY_VPOS_TYPE: styles.unityMacro,
	UNITY_Z_0_FAR_FROM_CLIPSPACE: styles.unityMacro,
	VPOS: styles.unityMacro
};

function highlight(text, styles) {
	var input = text.innerHTML;
	var length = input.length;
	var output = '';
	var i = 0;
	while(i < length){
		var c = input.charAt(i++);
		if('a' <= c && c <= 'z' || 'A' <= c && c <= 'Z' || c === '_'){
			var word = c;
			while(i < length){
				c = input.charAt(i);
				if((c < 'a' || 'z' < c) && (c < 'A' || 'Z' < c) && (c < '0' || '9' < c) && c !== '_'){
					break;
				}
				word += c;
				i += 1;
			}
			if(i < length) {
				// Words with € suffix should not be type-matched.
				c = input.charAt(i);
				if(c == '€') {
					output += word;
					i += 1;
					continue;
				}
			}
			if(word in customTypes){
				output += '<b class="type">' + word + '</b>';
			}
			else{
				var style = styles[word];
				if(typeof style === 'function') {
					output += style(word);	
				}
				else{
					output += word;
				}
			}
			continue;
		}
		if('0' <= c && c <= '9'){
			// numerical value
			var number = c;
			while(i < length){
				c = input.charAt(i);
				if((c < '0' || '9' < c) && c !== '.' && c !== 'f' && c !== 'F' && c !== 'd' && c !== 'D'){
					break;
				}
				number += c;
				i += 1;
			}
			output += '<span class="constant">' + number + '</span>';
			continue;
		}
		if(c === '"'){
			// string value
			var string = c;
			while(i < length){
				c = input.charAt(i);
				string += c;
				i += 1;
				if(c === '"'){
					break;
				}
			}
			output += '<span class="constant">' + string + '</span>';
			continue;
		}
		if(c === '\''){
			// char value
			var string = c;
			while(i < length){
				c = input.charAt(i);
				string += c;
				i += 1;
				if(c === '\''){
					break;
				}
			}
			output += '<span class="constant">' + string + '</span>';
			continue;
		}
		if (c === '#') {
			// directive
			var string = c;
			while(i < length){
				c = input.charAt(i);
				string += c;
				i += 1;
				if(c === '\n'){
					break;
				}
			}
			output += '<span class="directive">' + string + '</span>';
			continue;
		}
		if (c === '/' && i < length && input.charAt(i) === '/') {
			// comment
			var string = c;
			while (i < length) {
				c = input.charAt(i);
				string += c;
				i += 1;
				if (c === '\n') {
					break;
				}
			}
			output += '<span class="comment">' + string + '</span>';
			continue;
		}
		// something else
		output += c;
	}
	text.innerHTML = output;
}

var defaultStyles;
var alternativeStyles;

if (typeof(defaultCodeClass) === 'undefined') {
	defaultStyles = cSharpStyles;
	alternativeStyles = shaderStyles;
}
else {
	defaultStyles = shaderStyles;
	alternativeStyles = cSharpStyles;
}

(function(){
	var codeBlocks = document.getElementsByTagName('pre');
	for(var i = 0; i < codeBlocks.length; i++){
		var block = codeBlocks[i];
		highlight(block, block.className.length === 0 ? defaultStyles : alternativeStyles);
	}
	var inlineCode = document.getElementsByTagName('code');
	for(var i = 0; i < inlineCode.length; i++){
		var code = inlineCode[i];
		highlight(code, code.className.length === 0 ? defaultStyles : alternativeStyles);
	}
})();

function GetUnity() {
	if (typeof unityObject !== 'undefined') {
		return unityObject.getObjectById('unityPlayer');
	}
	return null;
}

function Play(file, width, height){
	document.getElementById('playerButton').style.display = 'none';
	document.getElementById('player').style.display = 'block';
	if (typeof unityObject !== 'undefined') {
		unityObject.embedUnity('unityPlayer', file, width, height);
	}
}

//window.addEventListener('load', function(event) {
//	var images = document.querySelectorAll('img[data-src]');
//	if ('IntersectionObserver' in window) {
//		var options = {
//			rootMargin: '200px 0px'
//		};
//		var observer = new IntersectionObserver(handleIntersect, options);
//		images.forEach(function(image) {
//			observer.observe(image);
//		});
//	}
//	else {
//		images.forEach(function(image) {
//			image.setAttribute('src', image.getAttribute('data-src'));
//		});
//	}
//});
//
//function handleIntersect(entries, observer) {
//	entries.forEach(function(entry) {
//		if (entry.intersectionRatio > 0) {
//			var image = entry.target;
//			observer.unobserve(image);
//			image.setAttribute('src', image.getAttribute('data-src'));
//		}
//	});
//}

$(function() {
	// Hide asides by default.
	$('aside h3').click(function() {
		$(this).next().toggleClass('expanded');
	});

	// Convert tabs to four spaces if tab-size CSS is not supported.
	var tabSizeTest = document.createElement('code');
	if (tabSizeTest.style.tabSize !== '' && tabSizeTest.style.MozTabSize !== '') {
		$('pre').each(function() {
			var codeBlock = $(this);
			codeBlock.html(codeBlock.html().replace(/\t/g, '    '));
		});
	}
});

var hasMath = hasMath || false;
if(hasMath) {
	(function(d, t) {
		var g = d.createElement(t),
			s = d.getElementsByTagName(t)[0];
//		g.src = 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=AM_CHTML';
		g.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=AM_CHTML';
		s.parentNode.insertBefore(g, s);
	}(document, 'script'));
}
